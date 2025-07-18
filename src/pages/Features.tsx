// ABOUTME: Dedicated features page showcasing all Perkpad capabilities
// ABOUTME: Organized by category with clear explanations and benefits

import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode, BarChart3, Users, Smartphone, Bell, Shield, Zap, Heart, Trophy, Target, MessageCircle } from "lucide-react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

const Features = () => {
  const featureCategories = [
    {
      title: "Digital Loyalty System",
      description: "Modern loyalty programs that customers actually complete",
      icon: QrCode,
      features: [
        {
          icon: QrCode,
          title: "QR Code Check-ins",
          description: "Customers simply scan to earn stamps - no apps required, works on any phone"
        },
        {
          icon: Smartphone,
          title: "Digital Stamp Cards",
          description: "Beautiful digital cards that never get lost or forgotten at home"
        },
        {
          icon: Trophy,
          title: "Custom Rewards",
          description: "Set up any reward structure - buy 10 get 1 free, points system, or custom offers"
        },
        {
          icon: Heart,
          title: "Gamification",
          description: "XP systems, levels, and achievements that keep customers engaged and coming back"
        }
      ]
    },
    {
      title: "Customer Intelligence",
      description: "Understand your customers like never before",
      icon: BarChart3,
      features: [
        {
          icon: BarChart3,
          title: "Advanced Analytics",
          description: "See visit patterns, popular times, customer lifetime value, and retention metrics"
        },
        {
          icon: Users,
          title: "Customer Profiles",
          description: "Build detailed profiles with purchase history, preferences, and contact information"
        },
        {
          icon: Target,
          title: "Smart Segmentation",
          description: "Group customers by behavior, frequency, and value for targeted campaigns"
        },
        {
          icon: Zap,
          title: "AI Recommendations",
          description: "Get AI-powered insights on the best times to reach customers and what offers work"
        }
      ]
    },
    {
      title: "Automated Engagement",
      description: "Keep customers coming back without manual work",
      icon: Bell,
      features: [
        {
          icon: Bell,
          title: "Smart Notifications",
          description: "Automated SMS and push notifications when customers are likely to return"
        },
        {
          icon: MessageCircle,
          title: "Birthday Campaigns",
          description: "Automatic birthday messages with special offers to increase loyalty"
        },
        {
          icon: Heart,
          title: "Win-Back Messages",
          description: "Automatically re-engage customers who haven't visited in a while"
        },
        {
          icon: Trophy,
          title: "Progress Reminders",
          description: "Remind customers when they're close to earning their next reward"
        }
      ]
    },
    {
      title: "Business Management",
      description: "Everything you need to run your loyalty program",
      icon: Shield,
      features: [
        {
          icon: Shield,
          title: "Staff Management",
          description: "Secure PIN access for staff with different permission levels and tracking"
        },
        {
          icon: Shield,
          title: "Fraud Protection",
          description: "Advanced fraud detection prevents fake check-ins and protects your rewards"
        },
        {
          icon: Zap,
          title: "5-Minute Setup",
          description: "Get started instantly with our guided setup wizard - no technical skills needed"
        },
        {
          icon: Users,
          title: "Multi-Location Support",
          description: "Manage multiple locations from one dashboard with location-specific insights"
        }
      ]
    }
  ];

  const handleGetStartedClick = () => {
    window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-[1.1] px-2">
            Everything you need for{" "}
            <span className="text-gradient">customer loyalty</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 font-medium">
            From QR code scanning to AI-powered insights, Perkpad has every feature you need to build lasting customer relationships.
          </p>
          <div className="px-4">
            <Button 
              size="xl" 
              className="btn-premium text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-xl w-full sm:w-auto min-h-[52px] sm:min-h-[60px] font-semibold"
              onClick={handleGetStartedClick}
            >
              Try All Features Free
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 sm:py-20 px-4 sm:px-6 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto">
            {/* Category Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <category.icon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                {category.title}
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-medium px-4 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Summary */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-brand-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 px-2">
            The results speak for themselves
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">40%</div>
              <div className="text-lg sm:text-xl text-white/90 font-medium">More repeat customers</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">3x</div>
              <div className="text-lg sm:text-xl text-white/90 font-medium">Higher completion rates</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">5min</div>
              <div className="text-lg sm:text-xl text-white/90 font-medium">Setup time</div>
            </div>
          </div>

          <Button 
            size="xl" 
            className="bg-white text-brand-primary hover:bg-gray-50 text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-xl w-full sm:w-auto min-h-[52px] sm:min-h-[60px] font-semibold"
            onClick={handleGetStartedClick}
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          <p className="text-white/80 text-sm sm:text-base mt-4 px-2">
            All features included • No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;