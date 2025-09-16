-- Phase 1: Critical Security Fixes - Protect Business Strategy Data (Tables Only)
-- Fix data exposure issues for confirmed existing tables

-- 1. SECURE BUSINESS SERVICES TABLE
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Anyone can view active services" ON public.business_services;
  DROP POLICY IF EXISTS "Business owners can manage their services" ON public.business_services;
  DROP POLICY IF EXISTS "Members can view services for their businesses" ON public.business_services;
  DROP POLICY IF EXISTS "Staff can view services for their business" ON public.business_services;
END $$;

-- Recreate secure policies for business_services
CREATE POLICY "Business owners can manage their services" 
ON public.business_services 
FOR ALL 
USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));

CREATE POLICY "Members can view services for their businesses" 
ON public.business_services 
FOR SELECT 
USING (is_active = true AND business_id IN (
  SELECT business_id FROM customer_business_memberships 
  WHERE customer_id = auth.uid()
));

CREATE POLICY "Staff can view services for their business" 
ON public.business_services 
FOR SELECT 
USING (business_id = get_staff_business_id(auth.uid()));

-- 2. SECURE ACHIEVEMENTS TABLE
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Anyone can view active achievements" ON public.achievements;
  DROP POLICY IF EXISTS "Members can view achievements for their businesses" ON public.achievements;  
  DROP POLICY IF EXISTS "Staff can view achievements for their business" ON public.achievements;
END $$;

-- Recreate secure policies for achievements
CREATE POLICY "Members can view achievements for their businesses" 
ON public.achievements 
FOR SELECT 
USING (is_active = true AND business_id IN (
  SELECT business_id FROM customer_business_memberships 
  WHERE customer_id = auth.uid()
) AND ((NOT is_hidden) OR (id IN (
  SELECT achievement_id FROM customer_achievements 
  WHERE customer_id = auth.uid() AND is_completed = true
))));

CREATE POLICY "Staff can view achievements for their business" 
ON public.achievements 
FOR SELECT 
USING (business_id = get_staff_business_id(auth.uid()));

-- 3. SECURE BUSINESS REWARD CONFIGS TABLE
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Anyone can view reward configs" ON public.business_reward_configs;
  DROP POLICY IF EXISTS "Public can view reward configs" ON public.business_reward_configs;
END $$;

-- Only members can view reward configs for their businesses
-- Business owners and staff already have access through existing policies

-- 4. FIX FUNCTION SECURITY - Add missing search_path settings for security
CREATE OR REPLACE FUNCTION public.get_staff_business_id(p_user_id uuid)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  staff_business_id uuid;
BEGIN
  SELECT business_id INTO staff_business_id
  FROM public.staff_members 
  WHERE user_id = p_user_id AND is_active = true
  LIMIT 1;
  
  RETURN staff_business_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.user_is_admin()
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  );
$$;

CREATE OR REPLACE FUNCTION public.owns_business(p_business_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.businesses b
    WHERE b.id = p_business_id AND b.owner_id = auth.uid()
  );
$$;

CREATE OR REPLACE FUNCTION public.is_staff_of_business(p_business_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.staff_members s
    WHERE s.business_id = p_business_id
      AND s.user_id = auth.uid()
      AND s.is_active = true
  );
$$;

CREATE OR REPLACE FUNCTION public.is_member_of_business(p_business_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.customer_business_memberships m
    WHERE m.business_id = p_business_id
      AND m.customer_id = auth.uid()
  );
$$;