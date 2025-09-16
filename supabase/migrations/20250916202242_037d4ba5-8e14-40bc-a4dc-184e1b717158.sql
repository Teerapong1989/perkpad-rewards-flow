-- Phase 1: Critical Security Fixes - Protect Business Strategy Data (Fixed)
-- Fix data exposure issues in business-related tables with proper policy handling

-- 1. SECURE BUSINESS SERVICES TABLE
-- Drop existing policies safely
DO $$ 
BEGIN
  -- Drop all existing policies on business_services
  DROP POLICY IF EXISTS "Anyone can view active services" ON public.business_services;
  DROP POLICY IF EXISTS "Business owners can manage their services" ON public.business_services;
  DROP POLICY IF EXISTS "Members can view services for their businesses" ON public.business_services;
  DROP POLICY IF EXISTS "Staff can view services for their business" ON public.business_services;
END $$;

-- Create new secure policies
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
  -- Drop all existing policies on achievements
  DROP POLICY IF EXISTS "Anyone can view active achievements" ON public.achievements;
  DROP POLICY IF EXISTS "Members can view achievements for their businesses" ON public.achievements;
  DROP POLICY IF EXISTS "Staff can view achievements for their business" ON public.achievements;
END $$;

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

-- 3. SECURE GIFT BOX REWARDS TABLE
DO $$ 
BEGIN
  -- Drop all existing policies on gift_box_rewards
  DROP POLICY IF EXISTS "Anyone can view active gift box rewards" ON public.gift_box_rewards;
  DROP POLICY IF EXISTS "Business owners can manage gift box rewards" ON public.gift_box_rewards;
  DROP POLICY IF EXISTS "Staff can view gift box rewards for their business" ON public.gift_box_rewards;
END $$;

CREATE POLICY "Business owners can manage gift box rewards" 
ON public.gift_box_rewards 
FOR ALL 
USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));

CREATE POLICY "Staff can view gift box rewards for their business" 
ON public.gift_box_rewards 
FOR SELECT 
USING (business_id = get_staff_business_id(auth.uid()));

-- 4. SECURE WEEKLY CHALLENGES TABLE
DO $$ 
BEGIN
  -- Drop all existing policies on weekly_challenges
  DROP POLICY IF EXISTS "Anyone can view active challenges" ON public.weekly_challenges;
  DROP POLICY IF EXISTS "Business owners can manage weekly challenges" ON public.weekly_challenges;
  DROP POLICY IF EXISTS "Members can view challenges for their businesses" ON public.weekly_challenges;
  DROP POLICY IF EXISTS "Staff can view challenges for their business" ON public.weekly_challenges;
END $$;

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
DO $$ 
BEGIN
  -- Drop existing policies
  DROP POLICY IF EXISTS "Anyone can view subscription plans" ON public.subscription_plans;
  DROP POLICY IF EXISTS "Public can view subscription plans" ON public.subscription_plans;
  DROP POLICY IF EXISTS "Authenticated users can view subscription plans" ON public.subscription_plans;
END $$;

CREATE POLICY "Authenticated users can view subscription plans" 
ON public.subscription_plans 
FOR SELECT 
TO authenticated
USING (is_active = true);

-- 6. SECURE FEATURE REQUESTS AND VOTES
DO $$ 
BEGIN
  -- Drop existing policies for feature_requests
  DROP POLICY IF EXISTS "Anyone can view feature requests" ON public.feature_requests;
  DROP POLICY IF EXISTS "Public can view feature requests" ON public.feature_requests;
  DROP POLICY IF EXISTS "Authenticated users can view feature requests" ON public.feature_requests;
  DROP POLICY IF EXISTS "Authenticated users can create feature requests" ON public.feature_requests;
END $$;

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

DO $$ 
BEGIN
  -- Drop existing policies for feature_votes
  DROP POLICY IF EXISTS "Anyone can vote on features" ON public.feature_votes;
  DROP POLICY IF EXISTS "Public can vote on features" ON public.feature_votes;
  DROP POLICY IF EXISTS "Authenticated users can manage their feature votes" ON public.feature_votes;
END $$;

CREATE POLICY "Authenticated users can manage their feature votes" 
ON public.feature_votes 
FOR ALL 
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());