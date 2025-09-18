-- CRITICAL SECURITY FIX: Restrict access to feature requests, comments, and votes
-- This prevents competitors from stealing business intelligence and customer insights

-- Drop the overly permissive policies
DROP POLICY IF EXISTS "Customers can view all feature requests" ON public.feature_requests;
DROP POLICY IF EXISTS "Anyone can view feature comments" ON public.feature_comments;
DROP POLICY IF EXISTS "Anyone can view feature votes" ON public.feature_votes;

-- SECURE FEATURE REQUESTS POLICIES
-- Business owners can view only their business feature requests
CREATE POLICY "Business owners can view their feature requests" 
ON public.feature_requests 
FOR SELECT 
USING (business_id IN (
  SELECT businesses.id
  FROM businesses
  WHERE businesses.owner_id = auth.uid()
));

-- Staff can view feature requests for their business
CREATE POLICY "Staff can view feature requests for their business" 
ON public.feature_requests 
FOR SELECT 
USING (business_id = get_staff_business_id(auth.uid()));

-- Customers can view feature requests only for businesses they're members of
CREATE POLICY "Members can view feature requests for their businesses" 
ON public.feature_requests 
FOR SELECT 
USING (business_id IN (
  SELECT customer_business_memberships.business_id
  FROM customer_business_memberships
  WHERE customer_business_memberships.customer_id = auth.uid()
));

-- SECURE FEATURE COMMENTS POLICIES
-- Business owners can view comments on their business feature requests
CREATE POLICY "Business owners can view comments on their features" 
ON public.feature_comments 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM feature_requests fr
    WHERE fr.id = feature_comments.feature_request_id
    AND fr.business_id IN (
      SELECT businesses.id
      FROM businesses
      WHERE businesses.owner_id = auth.uid()
    )
  )
  OR
  EXISTS (
    SELECT 1 FROM roadmap_features rf
    WHERE rf.id = feature_comments.roadmap_feature_id
    AND rf.business_id IN (
      SELECT businesses.id
      FROM businesses
      WHERE businesses.owner_id = auth.uid()
    )
  )
);

-- Staff can view comments for their business
CREATE POLICY "Staff can view comments for their business" 
ON public.feature_comments 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM feature_requests fr
    WHERE fr.id = feature_comments.feature_request_id
    AND fr.business_id = get_staff_business_id(auth.uid())
  )
  OR
  EXISTS (
    SELECT 1 FROM roadmap_features rf
    WHERE rf.id = feature_comments.roadmap_feature_id
    AND rf.business_id = get_staff_business_id(auth.uid())
  )
);

-- Customers can view comments on feature requests for businesses they're members of
CREATE POLICY "Members can view comments for their businesses" 
ON public.feature_comments 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM feature_requests fr
    WHERE fr.id = feature_comments.feature_request_id
    AND fr.business_id IN (
      SELECT customer_business_memberships.business_id
      FROM customer_business_memberships
      WHERE customer_business_memberships.customer_id = auth.uid()
    )
  )
  OR
  EXISTS (
    SELECT 1 FROM roadmap_features rf
    WHERE rf.id = feature_comments.roadmap_feature_id
    AND rf.business_id IN (
      SELECT customer_business_memberships.business_id
      FROM customer_business_memberships
      WHERE customer_business_memberships.customer_id = auth.uid()
    )
  )
);

-- SECURE FEATURE VOTES POLICIES
-- Business owners can view votes on their business feature requests
CREATE POLICY "Business owners can view votes on their features" 
ON public.feature_votes 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM feature_requests fr
    WHERE fr.id = feature_votes.feature_request_id
    AND fr.business_id IN (
      SELECT businesses.id
      FROM businesses
      WHERE businesses.owner_id = auth.uid()
    )
  )
  OR
  EXISTS (
    SELECT 1 FROM roadmap_features rf
    WHERE rf.id = feature_votes.roadmap_feature_id
    AND rf.business_id IN (
      SELECT businesses.id
      FROM businesses
      WHERE businesses.owner_id = auth.uid()
    )
  )
);

-- Staff can view votes for their business
CREATE POLICY "Staff can view votes for their business" 
ON public.feature_votes 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM feature_requests fr
    WHERE fr.id = feature_votes.feature_request_id
    AND fr.business_id = get_staff_business_id(auth.uid())
  )
  OR
  EXISTS (
    SELECT 1 FROM roadmap_features rf
    WHERE rf.id = feature_votes.roadmap_feature_id
    AND rf.business_id = get_staff_business_id(auth.uid())
  )
);

-- Customers can view votes on feature requests for businesses they're members of
CREATE POLICY "Members can view votes for their businesses" 
ON public.feature_votes 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM feature_requests fr
    WHERE fr.id = feature_votes.feature_request_id
    AND fr.business_id IN (
      SELECT customer_business_memberships.business_id
      FROM customer_business_memberships
      WHERE customer_business_memberships.customer_id = auth.uid()
    )
  )
  OR
  EXISTS (
    SELECT 1 FROM roadmap_features rf
    WHERE rf.id = feature_votes.roadmap_feature_id
    AND rf.business_id IN (
      SELECT customer_business_memberships.business_id
      FROM customer_business_memberships
      WHERE customer_business_memberships.customer_id = auth.uid()
    )
  )
);