
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Last updated: January 1, 2025</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Business information (business name, contact details)</li>
              <li>Customer loyalty program data</li>
              <li>Phone numbers for SMS communications</li>
              <li>SMS consent and preferences</li>
              <li>Usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and manage loyalty programs</li>
              <li>Send SMS messages for authentication, loyalty programs, and marketing (with consent)</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns to improve our SMS services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Information Sharing</h2>
            <p className="text-slate-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Data Security</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Your Rights</h2>
            <p className="text-slate-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of certain communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Cookies</h2>
            <p className="text-slate-600 mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, 
              and assist in our marketing efforts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. SMS Communications</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">7.1 SMS Program Information</h3>
              <p className="text-slate-600">
                Perkpad operates SMS programs for participating businesses to communicate with their customers. 
                We collect and process phone numbers and SMS preferences as part of our loyalty and authentication services.
              </p>

              <h3 className="text-xl font-semibold text-slate-800">7.2 Types of SMS Communications</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li><strong>Marketing Messages:</strong> Promotional content including loyalty rewards, special offers, and business promotions</li>
                <li><strong>Customer Care Messages:</strong> Authentication codes (OTP), account notifications, loyalty program updates, and service communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800">7.3 Data Collection and Use</h3>
              <p className="text-slate-600 mb-2">For SMS services, we collect:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Phone numbers</li>
                <li>SMS consent preferences</li>
                <li>Message delivery status</li>
                <li>Opt-out requests</li>
                <li>Customer engagement data</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mt-4">7.4 Message Frequency and Opt-out</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Marketing messages: Up to 4 per month per business</li>
                <li>Customer care messages: Up to 2 per month per business</li>
                <li>You can opt out anytime by replying STOP to any message</li>
                <li>Message and data rates may apply per your carrier plan</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mt-4">7.5 Data Sharing for SMS</h3>
              <p className="text-slate-600">
                We share necessary information with SMS service providers (like Twilio) to deliver messages. 
                We do not sell SMS data to third parties.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Contact Us</h2>
            <p className="text-slate-600">
              If you have questions about this Privacy Policy or our SMS programs, please contact us at{" "}
              <a href="https://tally.so/r/mRQ2Bl" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">
                our support form
              </a> or email support@perkpad.io.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
