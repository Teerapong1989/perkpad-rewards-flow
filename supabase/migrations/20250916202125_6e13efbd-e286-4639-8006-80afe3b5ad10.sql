-- Phase 1: Critical Security Fixes - Protect Business Strategy Data
-- Fix data exposure issues in business-related tables

-- 1. SECURE BUSINESS SERVICES TABLE
-- Remove overly permissive policy and create restricted access
DROP POLICY IF EXISTS "Anyone can view active services" ON public.business_services;

-- Business owners can manage their services
CREATE POLICY "Business owners can manage their services" 
ON public.business_services 
FOR ALL 
USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));

-- Members can view services for their businesses only
CREATE POLICY "Members can view services for their businesses" 
ON public.business_services 
FOR SELECT 
USING (is_active = true AND business_id IN (
  SELECT business_id FROM customer_business_memberships 
  WHERE customer_id = auth.uid()
));

-- Staff can view services for their business
CREATE POLICY "Staff can view services for their business" 
ON public.business_services 
FOR SELECT 
USING (business_id = get_staff_business_id(auth.uid()));

-- 2. SECURE ACHIEVEMENTS TABLE
-- Remove overly permissive policy
DROP POLICY IF EXISTS "Anyone can view active achievements" ON public.achievements;

-- Members can view achievements for their businesses only
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

-- Staff can view achievements for their business
CREATE POLICY "Staff can view achievements for their business" 
ON public.achievements 
FOR SELECT 
USING (business_id = get_staff_business_id(auth.uid()));

-- 3. SECURE GIFT BOX REWARDS TABLE
-- Check if policies exist and remove them
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'gift_box_rewards' AND policyname = 'Anyone can view active gift box rewards') THEN
    EXECUTE 'DROP POLICY "Anyone can view active gift box rewards" ON public.gift_box_rewards';
  END IF;
END $$;

-- Create restricted policies for gift_box_rewards
CREATE POLICY "Business owners can manage gift box rewards" 
ON public.gift_box_rewards 
FOR ALL 
USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));

CREATE POLICY "Staff can view gift box rewards for their business" 
ON public.gift_box_rewards 
FOR SELECT 
USING (business_id = get_staff_business_id(auth.uid()));

-- 4. SECURE WEEKLY CHALLENGES TABLE
-- Check if policies exist and remove them
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'weekly_challenges' AND policyname = 'Anyone can view active challenges') THEN
    EXECUTE 'DROP POLICY "Anyone can view active challenges" ON public.weekly_challenges';
  END IF;
END $$;

-- Create restricted policies for weekly_challenges
CREATE POLICY "Business owners can manage weekly challenges" 
ON public.weekly_challenges 
FOR ALL 
USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()) OR business_id IS NULL);

CREATE POLICY "Members can view challenges for their businesses" 
ON public.weekly_challenges 
FOR SELECT 
USING (is_active = true AND (
  business_id IN (
    SELECT business_id FROM customer_business_memberships 
    WHERE customer_id = auth.uid()
  ) OR business_id IS NULL -- Global challenges
));

CREATE POLICY "Staff can view challenges for their business" 
ON public.weekly_challenges 
FOR SELECT 
USING (business_id = get_staff_business_id(auth.uid()) OR business_id IS NULL);

-- 5. SECURE SUBSCRIPTION PLANS TABLE
-- Check if overly permissive policies exist and remove them
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'subscription_plans' AND policyname = 'Anyone can view subscription plans') THEN
    EXECUTE 'DROP POLICY "Anyone can view subscription plans" ON public.subscription_plans';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'subscription_plans' AND policyname = 'Public can view subscription plans') THEN
    EXECUTE 'DROP POLICY "Public can view subscription plans" ON public.subscription_plans';
  END IF;
END $$;

-- Create secure policy for subscription plans
CREATE POLICY "Authenticated users can view subscription plans" 
ON public.subscription_plans 
FOR SELECT 
TO authenticated
USING (is_active = true);

-- 6. SECURE FEATURE REQUESTS AND VOTES
-- Check if overly permissive policies exist and remove them for feature_requests
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'feature_requests' AND policyname = 'Anyone can view feature requests') THEN
    EXECUTE 'DROP POLICY "Anyone can view feature requests" ON public.feature_requests';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'feature_requests' AND policyname = 'Public can view feature requests') THEN
    EXECUTE 'DROP POLICY "Public can view feature requests" ON public.feature_requests';
  END IF;
END $$;

-- Create secure policies for feature_requests
CREATE POLICY "Authenticated users can view feature requests" 
ON public.feature_requests 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can create feature requests" 
ON public.feature_requests 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);

-- Check if overly permissive policies exist and remove them for feature_votes
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'feature_votes' AND policyname = 'Anyone can vote on features') THEN
    EXECUTE 'DROP POLICY "Anyone can vote on features" ON public.feature_votes';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'feature_votes' AND policyname = 'Public can vote on features') THEN
    EXECUTE 'DROP POLICY "Public can vote on features" ON public.feature_votes';
  END IF;
END $$;

-- Create secure policies for feature_votes
CREATE POLICY "Authenticated users can manage their feature votes" 
ON public.feature_votes 
FOR ALL 
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- 7. FIX FUNCTION SECURITY - Add missing search_path settings
-- Update functions to include proper search_path for security
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