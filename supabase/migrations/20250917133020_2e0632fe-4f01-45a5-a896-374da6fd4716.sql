-- Fix remaining function security issues - Add search_path to all functions
-- This addresses the "Function Search Path Mutable" warnings

-- Update all functions that are missing SET search_path for security

CREATE OR REPLACE FUNCTION public.has_role(user_id text, check_role app_role)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 
        FROM public.user_roles 
        WHERE user_roles.user_id = has_role.user_id::uuid AND role = check_role
    );
END;
$$;

CREATE OR REPLACE FUNCTION public.get_user_role(user_id text)
RETURNS app_role
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
    user_role public.app_role;
BEGIN
    SELECT role INTO user_role
    FROM public.user_roles
    WHERE user_roles.user_id = get_user_role.user_id::uuid;
    
    RETURN COALESCE(user_role, 'customer'::public.app_role);
END;
$$;

CREATE OR REPLACE FUNCTION public.make_user_admin(user_email text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  target_user_id UUID;
BEGIN
  -- Find user by email
  SELECT id INTO target_user_id 
  FROM auth.users 
  WHERE email = user_email;
  
  IF target_user_id IS NULL THEN
    RAISE EXCEPTION 'User with email % not found', user_email;
  END IF;
  
  -- Insert admin role (ignore if already exists)
  INSERT INTO public.user_roles (user_id, role)
  VALUES (target_user_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;
  
  RAISE NOTICE 'User % has been granted admin access', user_email;
END;
$$;

CREATE OR REPLACE FUNCTION public.secure_assign_admin_role(target_user_email text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  target_user_id uuid;
  current_user_is_admin boolean;
BEGIN
  -- Check if current user is admin
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ) INTO current_user_is_admin;
  
  -- Only allow if current user is admin or if no admins exist yet (bootstrap)
  IF NOT current_user_is_admin AND EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    RAISE EXCEPTION 'Access denied: Only administrators can assign admin roles';
  END IF;
  
  -- Get target user ID
  SELECT id INTO target_user_id 
  FROM auth.users 
  WHERE email = target_user_email;
  
  IF target_user_id IS NULL THEN
    RAISE EXCEPTION 'User with email % not found', target_user_email;
  END IF;
  
  -- Insert admin role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (target_user_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;
  
  RAISE NOTICE 'Admin role assigned to user: %', target_user_email;
END;
$$;

CREATE OR REPLACE FUNCTION public.has_premium_subscription(p_business_id uuid)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  plan_name TEXT;
BEGIN
  SELECT sp.name INTO plan_name
  FROM public.business_subscriptions bs
  JOIN public.subscription_plans sp ON bs.plan_id = sp.id
  WHERE bs.business_id = p_business_id
    AND bs.status IN ('active', 'trialing')
    AND (bs.trial_end IS NULL OR bs.trial_end > now())
    AND (bs.current_period_end IS NULL OR bs.current_period_end > now());
  
  RETURN plan_name IN ('Pro', 'Growth');
END;
$$;