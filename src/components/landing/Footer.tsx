
import { Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Perkpad</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The easiest way for small businesses to build customer loyalty with digital punch cards and rewards.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-brand-accent transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-accent transition-colors">Pricing</Link></li>
              <li><Link to="/how-it-works" className="hover:text-brand-accent transition-colors">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Support</Link></li>
              <li><Link to="/sms-help" className="hover:text-brand-accent transition-colors">SMS Help</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">General Inquiries</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 Perkpad. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-500">Social Media - Coming Soon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
