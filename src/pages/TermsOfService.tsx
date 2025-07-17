
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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
        
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Terms of Service</h1>
        <p className="text-slate-600 mb-8">Last updated: January 1, 2025</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing and using Perkpad ("Service"), you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Description of Service</h2>
            <p className="text-slate-600 mb-4">
              Perkpad provides digital loyalty card and rewards management services for small businesses 
              and their customers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. User Accounts</h2>
            <p className="text-slate-600 mb-4">
              You are responsible for safeguarding the password and for maintaining the confidentiality 
              of your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Acceptable Use</h2>
            <p className="text-slate-600 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Use the service for any unlawful purpose</li>
              <li>Interfere with or disrupt the service</li>
              <li>Attempt to gain unauthorized access to the service</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Payment Terms</h2>
            <p className="text-slate-600 mb-4">
              Paid plans are billed in advance on a monthly or annual basis. You may cancel your 
              subscription at any time through your account dashboard.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Intellectual Property</h2>
            <p className="text-slate-600 mb-4">
              The service and its original content, features, and functionality are and will remain 
              the exclusive property of Perkpad and its licensors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">
              In no event shall Perkpad be liable for any indirect, incidental, special, 
              consequential, or punitive damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Termination</h2>
            <p className="text-slate-600 mb-4">
              We may terminate or suspend your account immediately, without prior notice, for conduct 
              that we believe violates these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Governing Law</h2>
            <p className="text-slate-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the 
              jurisdiction in which Perkpad operates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. SMS Services and Communications</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">10.1 SMS Program Description</h3>
              <p className="text-slate-600">
                Perkpad offers SMS services for two distinct purposes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li><strong>Marketing Messages:</strong> Promotional text messages including loyalty rewards notifications, special offers, and exclusive discounts from businesses using our platform.</li>
                <li><strong>Customer Care Messages:</strong> Service-related text messages including authentication codes (OTP), loyalty program updates, account notifications, and customer support communications.</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">10.2 Consent and Opt-in</h3>
              <p className="text-slate-600 mb-2">
                By providing your phone number and agreeing to receive SMS communications, you expressly consent to receive text messages from Perkpad and participating businesses. Separate consent is required for each type of messaging:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <p className="text-slate-700 font-medium">Marketing Messages:</p>
                <p className="text-slate-600 text-sm">
                  "I agree to receive promotional text messages including loyalty rewards, special offers, and exclusive discounts from [Business Name] via Perkpad. Message frequency varies, up to 4 messages per month. Reply STOP to unsubscribe. Message and data rates may apply. Consent is not a condition of purchase."
                </p>
                <p className="text-slate-700 font-medium mt-4">Customer Care Messages:</p>
                <p className="text-slate-600 text-sm">
                  "I agree to receive service-related text messages including authentication codes, loyalty program updates, and account notifications from [Business Name] via Perkpad. Message frequency varies, up to 2 messages per month. Reply STOP to unsubscribe. Message and data rates may apply."
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">10.3 Message Frequency and Pricing</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Marketing messages: Up to 4 messages per month per business</li>
                <li>Customer care messages: Up to 2 messages per month per business</li>
                <li>Message and data rates may apply as per your mobile carrier's plan</li>
                <li>Perkpad does not charge additional fees for SMS services beyond your subscription plan</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">10.4 Opt-out Instructions</h3>
              <p className="text-slate-600 mb-2">
                You can opt out of SMS communications at any time by:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Replying <strong>STOP</strong> to any SMS message you receive</li>
                <li>Contacting customer support at support@perkpad.io</li>
                <li>Updating your preferences in your account settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">10.5 Help and Support</h3>
              <p className="text-slate-600">
                For help with SMS services, reply <strong>HELP</strong> to any message or contact us:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Email: support@perkpad.io</li>
                <li>Website: perkpad.io/contact</li>
                <li>Support hours: Monday-Friday, 9 AM - 6 PM EST</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">11. Contact Information</h2>
            <p className="text-slate-600">
              If you have any questions about these Terms of Service, please contact us at{" "}
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

export default TermsOfService;
