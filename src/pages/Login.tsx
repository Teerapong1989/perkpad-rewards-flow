import { useState, type FormEvent } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/auth-context";

type LocationState = {
  from?: string;
};

const Login = () => {
  const { session } = useAuth();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectTo = state?.from || "/dashboard";

  if (session) {
    return <Navigate to={redirectTo} replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message || "Unable to sign in. Please try again.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-light/50 to-white flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md p-6 sm:p-8 space-y-5">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Business Owner Login</h1>
          <p className="text-sm text-muted-foreground">Sign in to view your dashboard and manage QR loyalty activity.</p>
        </div>

        {!isSupabaseConfigured && (
          <Alert>
            <AlertDescription>Supabase is not configured. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to <code>.env.local</code>.</AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting || !isSupabaseConfigured}>
            {isSubmitting ? "Signing in..." : "Sign in to dashboard"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
