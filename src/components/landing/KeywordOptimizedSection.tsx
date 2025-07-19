// ABOUTME: This component creates keyword-optimized content sections targeting easier SEO keywords
// ABOUTME: It focuses on long-tail keywords like "digital punch card app" and "replace paper punch cards"

import { CheckCircle, QrCode, Smartphone, Store } from "lucide-react";
import { memo } from "react";

const KeywordOptimizedSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Replace Paper Punch Cards Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Stop Losing Money on Lost Punch Cards
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            67% of paper punch cards get lost before completion. Digital punch cards solve this problem and help you track which promotions actually work.
          </p>
        </div>

        {/* Problems with Paper Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Paper Card Problems Cost You Money</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-600">Lost cards = lost revenue (customers start over elsewhere)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-600">No data on what brings customers back</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-600">Staff time wasted on card management</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-600">Printing costs add up over time</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Digital Cards Increase Revenue</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">3x higher completion rate = more repeat sales</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Track which offers drive the most visits</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">No printing costs, no card replacement</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Remind customers to return and redeem</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Perfect For Section - Targeting Industry Keywords */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Works for Any Local Business
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simple digital punch cards that work for cafes, restaurants, retail stores, and service businesses. Set up in 5 minutes.
          </p>
        </div>

        {/* Industry Specific Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
              <Store className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Coffee Shops</h3>
            <p className="text-gray-600 text-sm">Increase daily customers with a simple QR loyalty program</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Restaurants</h3>
            <p className="text-gray-600 text-sm">Bring diners back more often with digital stamp cards</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Cafes & Bakeries</h3>
            <p className="text-gray-600 text-sm">Replace lost paper cards with QR codes customers scan</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Retail & Services</h3>
            <p className="text-gray-600 text-sm">Works for any business that wants repeat customers</p>
          </div>
        </div>

        {/* No App Download Feature */}
        <div className="mt-20 text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            No App Download Required
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Your customers don't download anything. They scan your QR code with their phone camera, 
            it opens in their browser, and they start collecting stamps immediately.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">1</div>
              <p className="text-gray-600">Customer scans QR code</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">2</div>
              <p className="text-gray-600">Opens in their browser</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">3</div>
              <p className="text-gray-600">Collects stamps & rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(KeywordOptimizedSection);