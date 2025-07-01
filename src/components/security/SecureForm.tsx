
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { sanitizeInput, validateEmail, checkRateLimit, logSecurityEvent } from '@/utils/security';

interface SecureFormProps {
  onSubmit: (data: { email: string }) => void;
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  buttonText?: string;
}

const SecureForm = ({ 
  onSubmit, 
  children, 
  className = "", 
  placeholder = "Enter your email address",
  buttonText = "Submit"
}: SecureFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Sanitize input
      const sanitizedEmail = sanitizeInput(email);
      
      // Validate email
      if (!validateEmail(sanitizedEmail)) {
        setError("Please enter a valid email address");
        logSecurityEvent('invalid_email_attempt', { email: sanitizedEmail });
        return;
      }

      // Check rate limiting
      const clientId = navigator.userAgent + window.location.href;
      if (!checkRateLimit(clientId)) {
        setError("Too many attempts. Please wait a moment before trying again.");
        logSecurityEvent('rate_limit_exceeded', { clientId });
        return;
      }

      // Submit the form
      await onSubmit({ email: sanitizedEmail });
      setEmail("");
      
    } catch (error) {
      console.error('Form submission error:', error);
      setError("Something went wrong. Please try again.");
      logSecurityEvent('form_submission_error', { error: String(error) });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      {children}
      <div className="space-y-2">
        <input 
          type="email" 
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          maxLength={254}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
          required
        />
        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}
      </div>
      <Button 
        type="submit"
        disabled={isSubmitting || !email.trim()}
        className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : buttonText}
      </Button>
    </form>
  );
};

export default SecureForm;
