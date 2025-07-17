// ABOUTME: This page provides comprehensive SMS help and support information for TFV compliance
// ABOUTME: Includes HELP keyword responses, support contact information, and SMS troubleshooting

import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Phone, Mail, Clock } from "lucide-react";

const SMSHelp = () => {
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
        
        <div className="flex items-center space-x-3 mb-6">
          <MessageSquare className="w-8 h-8 text-teal-600" />
          <h1 className="text-4xl font-bold text-slate-800">SMS Help & Support</h1>
        </div>
        
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-teal-800 mb-3">Quick Help Response</h2>
          <p className="text-teal-700">
            <strong>Perkpad SMS Help:</strong> For assistance with SMS messages, email support@perkpad.io or visit perkpad.io/sms-help. 
            Reply STOP to unsubscribe. Support hours: Mon-Fri 9 AM - 6 PM EST.
          </p>
        </div>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">SMS Program Information</h2>
            <p className="text-slate-600 mb-4">
              Perkpad provides SMS services to help businesses communicate with their customers through 
              our loyalty platform. We operate two types of SMS programs:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Marketing Messages</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Loyalty rewards notifications</li>
                  <li>• Special offers and discounts</li>
                  <li>• Promotional campaigns</li>
                  <li>• Up to 4 messages per month</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Customer Care Messages</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Authentication codes (OTP)</li>
                  <li>• Account notifications</li>
                  <li>• Loyalty program updates</li>
                  <li>• Up to 2 messages per month</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">How to Stop SMS Messages</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">To unsubscribe from SMS messages:</h3>
              <ul className="text-red-700 space-y-2">
                <li>1. <strong>Reply STOP</strong> to any SMS message you received</li>
                <li>2. Contact our support team at support@perkpad.io</li>
                <li>3. Update your preferences in your account settings</li>
              </ul>
              <p className="text-red-600 text-sm mt-3">
                <strong>Note:</strong> You'll receive a confirmation message when you opt out successfully.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contact Support</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <Mail className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Email Support</h3>
                <p className="text-slate-600 text-sm mb-3">Get help via email</p>
                <a 
                  href="mailto:support@perkpad.io" 
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  support@perkpad.io
                </a>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <MessageSquare className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Contact Form</h3>
                <p className="text-slate-600 text-sm mb-3">Submit a support request</p>
                <a 
                  href="https://tally.so/r/mRQ2Bl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Support Form
                </a>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Support Hours</h3>
                <p className="text-slate-600 text-sm">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Why am I receiving SMS messages?</h3>
                <p className="text-slate-600 text-sm">
                  You're receiving messages because you opted in to SMS communications from a business 
                  that uses Perkpad for their loyalty program. You would have provided consent during 
                  account setup or when joining their loyalty program.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Do SMS messages cost money?</h3>
                <p className="text-slate-600 text-sm">
                  Standard message and data rates may apply according to your mobile carrier's plan. 
                  Perkpad does not charge additional fees for SMS services.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">How often will I receive messages?</h3>
                <p className="text-slate-600 text-sm">
                  Marketing messages: Up to 4 per month per business<br />
                  Customer care messages: Up to 2 per month per business<br />
                  Frequency may vary based on your activity and the business's campaigns.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">I replied STOP but I'm still getting messages</h3>
                <p className="text-slate-600 text-sm">
                  It may take up to 24 hours to process your opt-out request. If you continue receiving 
                  messages after 24 hours, please contact our support team at support@perkpad.io.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Legal Information</h2>
            <p className="text-slate-600 mb-4">
              For complete terms regarding our SMS services, please review:
            </p>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-of-service" className="text-teal-600 hover:text-teal-700">
                  Terms of Service (Section 10: SMS Services)
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-teal-600 hover:text-teal-700">
                  Privacy Policy (Section 7: SMS Communications)
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SMSHelp;