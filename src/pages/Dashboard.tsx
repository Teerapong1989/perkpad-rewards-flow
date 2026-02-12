// ABOUTME: Business owner dashboard page showing key metrics and quick actions
// ABOUTME: Responsive design that adapts from mobile to desktop layouts

import { Users, Calendar, Gift, BarChart3, Settings, QrCode, MessageSquare, Sun, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const metrics = {
    totalCustomers: 0,
    monthlyScans: 0,
    rewardsClaimed: 0,
  };

  const isNewAccount = Object.values(metrics).every((value) => value === 0);

  const metricCards = [
    {
      label: "Total Customers",
      value: metrics.totalCustomers,
      icon: Users,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      delta: "+12%",
    },
    {
      label: "This Month",
      value: metrics.monthlyScans,
      icon: Calendar,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      delta: "+8%",
    },
    {
      label: "Rewards Claimed",
      value: metrics.rewardsClaimed,
      icon: Gift,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      delta: "+3%",
      className: "md:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                Perkpad Production
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Use this for testing real function and more fun to do
              </p>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline ml-2">Settings</span>
              </Button>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                PP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {isNewAccount && (
          <Card className="p-5 sm:p-6 mb-6 sm:mb-8 border-brand-primary/20 bg-gradient-to-r from-brand-light to-white shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Get your first customer in 2 minutes</h2>
                <p className="text-sm sm:text-base text-gray-600">Share your QR code and let someone try it right now.</p>
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90"
                  onClick={() => navigate("/features")}
                >
                  Get QR Code
                  <QrCode className="ml-2 h-5 w-5" />
                </Button>
                <Button asChild variant="link" className="text-gray-600 px-0 h-auto">
                  <Link to="/how-it-works">See setup guide</Link>
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {metricCards.map((metric) => {
            const Icon = metric.icon;

            return (
              <Card
                key={metric.label}
                className={`p-4 sm:p-6 border border-gray-200 transition-shadow ${isNewAccount ? "bg-white/70 opacity-80" : "bg-white hover:shadow-md"} ${metric.className ?? ""}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">{metric.label}</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{metric.value}</p>
                    {isNewAccount ? (
                      <p className="text-xs sm:text-sm text-gray-500 mt-2">This will update after your first scan.</p>
                    ) : (
                      <div className="flex items-center mt-1 sm:mt-2">
                        <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1" />
                        <span className="text-xs sm:text-sm text-green-500">{metric.delta} vs last month</span>
                      </div>
                    )}
                  </div>
                  <div className={`p-2 sm:p-3 rounded-xl ${metric.iconBg}`}>
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 ${metric.iconColor}`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Button 
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-brand-primary hover:bg-brand-primary/90"
            size="lg"
          >
            View Analytics
            <BarChart3 className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold border-gray-200 hover:bg-gray-50"
            size="lg"
          >
            Manage Plan
            <Settings className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Notification */}
        <Card className="p-4 sm:p-6 bg-blue-50 border border-blue-200 mb-6 sm:mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-full mt-1">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-1">
                  Your evening rush is starting soon! 🥳
                </h3>
                <p className="text-xs sm:text-sm text-blue-700">
                  Great time for special offers or happy hour promotions!
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
              ×
            </Button>
          </div>
        </Card>

        <Card className={`mb-6 sm:mb-8 border ${isNewAccount ? "bg-white/60 border-gray-200" : "bg-white border-brand-primary/30"} p-4 sm:p-5`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className={`font-semibold ${isNewAccount ? "text-gray-700" : "text-gray-900"}`}>Gamified Rewards Demo</h3>
              <p className={`text-sm mt-1 ${isNewAccount ? "text-gray-500" : "text-gray-600"}`}>
                Preview your customer journey before going live.
              </p>
            </div>
            <Button variant={isNewAccount ? "ghost" : "outline"} size="sm" className="shrink-0" onClick={() => navigate("/features") }>
              Try Demo
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </Card>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            <Card className="p-4 sm:p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-2 sm:p-3 bg-blue-50 rounded-xl mx-auto mb-2 sm:mb-3 w-fit">
                <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">Analytics</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-2 sm:p-3 bg-green-50 rounded-xl mx-auto mb-2 sm:mb-3 w-fit">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">Customers</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-2 sm:p-3 bg-purple-50 rounded-xl mx-auto mb-2 sm:mb-3 w-fit">
                <QrCode className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">QR Code</p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-md transition-shadow cursor-pointer relative">
              <div className="p-2 sm:p-3 bg-orange-50 rounded-xl mx-auto mb-2 sm:mb-3 w-fit">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">SMS</p>
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5">
                New
              </Badge>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-md transition-shadow cursor-pointer col-span-2 sm:col-span-1">
              <div className="p-2 sm:p-3 bg-gray-50 rounded-xl mx-auto mb-2 sm:mb-3 w-fit">
                <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">Settings</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
