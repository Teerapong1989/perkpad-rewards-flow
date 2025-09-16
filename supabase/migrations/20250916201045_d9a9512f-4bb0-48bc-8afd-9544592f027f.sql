-- Fix Business Location Details Exposed to Public security issue
-- Remove overly permissive public access policy and create secure public discovery function

-- Remove the problematic public policy that exposes all location details
DROP POLICY IF EXISTS "Public can view basic location info for discovery" ON public.business_locations;

-- Create a secure policy for authenticated users only  
CREATE POLICY "Authenticated users can view basic location discovery info" 
ON public.business_locations 
FOR SELECT 
TO authenticated
USING (is_active = true);

-- Drop existing function and recreate with secure implementation
DROP FUNCTION IF EXISTS public.get_public_business_locations();

CREATE OR REPLACE FUNCTION public.get_public_business_locations()
RETURNS TABLE(
  id uuid,
  business_id uuid, 
  name text,
  address text,
  business_name text,
  business_logo_url text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    bl.id,
    bl.business_id,
    bl.name,
    bl.address,
    b.name as business_name,
    b.logo_url as business_logo_url
  FROM public.business_locations bl
  JOIN public.businesses b ON bl.business_id = b.id
  WHERE bl.is_active = true;
END;
$$;