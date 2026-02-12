// ABOUTME: Business owner dashboard page showing key metrics and quick actions
// ABOUTME: Responsive design that adapts from mobile to desktop layouts

import { Users, Calendar, Gift, BarChart3, Settings, QrCode, MessageSquare, Sun, Store } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div>
              <div className="flex items-center gap-2">
                <Store className="h-5 w-5 text-brand-primary" />
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Perkpad Dashboard
                </h1>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Welcome back. Track loyalty activity and launch quick actions.
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <Badge className="hidden sm:inline-flex bg-green-100 text-green-800 hover:bg-green-100">Authenticated</Badge>
              <Button variant="ghost" size="sm" className="p-2" aria-label="Theme settings">
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2" aria-label="Open settings">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Card className="p-4 sm:p-5 mb-6 border-amber-200 bg-amber-50">
          <p className="text-sm text-amber-900 font-medium">No recent check-ins yet.</p>
          <p className="text-xs sm:text-sm text-amber-800 mt-1">Share your QR code in-store to start seeing customer activity in real time.</p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="p-4 sm:p-6 bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Total Customers</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">3</p>
                <div className="flex items-center mt-1 sm:mt-2">
                  <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1" />
                  <span className="text-xs sm:text-sm text-green-500">+0%</span>
                </div>
              </div>
              <div className="p-2 sm:p-3 bg-blue-50 rounded-xl">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">This Month</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-500 mt-1">Customer check-ins</p>
              </div>
              <div className="p-2 sm:p-3 bg-green-50 rounded-xl">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 bg-white border border-gray-200 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Rewards Claimed</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-500 mt-1">No rewards redeemed yet</p>
              </div>
              <div className="p-2 sm:p-3 bg-purple-50 rounded-xl">
                <Gift className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-purple-600" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Button className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-brand-primary hover:bg-brand-primary/90" size="lg">
            View Analytics
            <BarChart3 className="ml-2 h-5 w-5" />
          </Button>

          <Button variant="outline" className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold border-gray-200 hover:bg-gray-50" size="lg">
            Open Customer QR Page
            <QrCode className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <Card className="p-4 sm:p-6 bg-blue-50 border border-blue-200 mb-6 sm:mb-8">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-full mt-1">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-1">Your evening rush is starting soon.</h3>
              <p className="text-xs sm:text-sm text-blue-700">Great time to message customers with a bonus-check-in promotion.</p>
            </div>
          </div>
        </Card>

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
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5">New</Badge>
            </Card>
            <Card className="p-4 sm:p-6 text-center hover:shadow-md transition-shadow cursor-pointer col-span-2 sm:col-span-1">
              <div className="p-2 sm:p-3 bg-gray-50 rounded-xl mx-auto mb-2 sm:mb-3 w-fit">
                <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">Settings</p>
            </Card>
          </div>
          <Separator className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
