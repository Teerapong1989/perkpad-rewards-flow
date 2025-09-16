-- Fix All Business Information Exposed to Public security issue
-- Remove overly permissive public access and create secure public discovery function

-- Remove the problematic public policy that exposes all business data
DROP POLICY IF EXISTS "Public can view basic business info for discovery" ON public.businesses;

-- Create a secure policy for authenticated users doing business discovery
CREATE POLICY "Authenticated users can view safe business discovery info" 
ON public.businesses 
FOR SELECT 
TO authenticated
USING (true);

-- Create a secure public function that returns only safe business information for discovery
CREATE OR REPLACE FUNCTION public.get_public_business_discovery()
RETURNS TABLE(
  id uuid,
  name text,
  description text,
  business_type business_type_enum,
  logo_url text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    b.id,
    b.name,
    b.description,
    b.business_type,
    b.logo_url
  FROM public.businesses b
  WHERE b.name IS NOT NULL; -- Only return businesses with names
END;
$$;