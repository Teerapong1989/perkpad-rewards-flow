import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { QrCode, Smartphone, BarChart3, Gift, Check, Star, ArrowRight, Users, Zap, Shield, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800">Perkpad</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#pricing" className="text-slate-600 hover:text-teal-600 transition-colors">Pricing</a>
          <a href="#features" className="text-slate-600 hover:text-teal-600 transition-colors">Features</a>
          <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
            Login
          </Button>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-orange-50/30 blur-3xl"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 text-sm font-medium">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Trusted by 10,000+ businesses
                  </Badge>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                  Turn Every Visit into a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-orange-400 animate-pulse">
                    Rewarding Experience
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                  Create a free digital loyalty card for your shop in minutes. 
                  Keep customers coming back with QR code rewards they'll love.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-lg px-10 py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-7 rounded-2xl border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300">
                  <Zap className="mr-2 w-5 h-5" />
                  See How It Works
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium">Setup in 5 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium">Free forever plan</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in delay-300">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg animate-bounce delay-500 flex items-center justify-center">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full shadow-lg animate-bounce delay-700 flex items-center justify-center">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl shadow-lg animate-bounce delay-1000 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              
              {/* Main phone mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-white text-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  <QrCode className="w-28 h-28 mx-auto mb-4 animate-pulse" />
                  <p className="font-bold text-lg">Scan to collect stamps!</p>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-700 text-lg">Progress</span>
                    <span className="text-teal-600 font-bold text-lg bg-teal-50 px-3 py-1 rounded-full">7/10 stamps</span>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {[1,2,3,4,5,6,7].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                        <Check className="w-5 h-5 text-teal-600" />
                      </div>
                    ))}
                    {[8,9,10].map((i) => (
                      <div key={i} className="w-10 h-10 bg-slate-100 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent animate-pulse"></div>
                    <p className="text-orange-700 font-bold text-lg relative">3 more visits for a free coffee! ☕</p>
                    <div className="w-full bg-orange-200 rounded-full h-2 mt-3 relative">
                      <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Everything you need to build customer loyalty
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple tools that help small businesses create meaningful connections with their customers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-800">QR Code Check-In</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  Customers simply scan your unique QR code to earn stamps. No app downloads, no hassle - just point, scan, and collect rewards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-800">Custom Rewards</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  Set your own reward rules. Buy 10 get 1 free, spend $100 get $10 off - you decide what works best for your business.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-800">Customer Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  Track visits, monitor redemptions, and understand customer behavior with simple analytics that actually help your business grow.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Simple pricing that grows with you
            </h2>
            <p className="text-xl text-slate-600">
              Start free, upgrade when you're ready. No hidden fees, cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Plan */}
            <Card className="border-2 border-slate-200 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">$0</div>
                  <div className="text-slate-600">per month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">1 loyalty card program</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Basic QR codes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Up to 100 customers</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardContent>
            </Card>

            {/* Starter Plan */}
            <Card className="border-2 border-teal-300 rounded-2xl relative bg-gradient-to-br from-white to-teal-50">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 hover:bg-teal-700">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">$19</div>
                  <div className="text-slate-600">per month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">3 loyalty card programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Custom business logo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Export customer data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Up to 500 customers</span>
                  </li>
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Start Free Trial</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-slate-200 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">$49</div>
                  <div className="text-slate-600">per month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Unlimited loyalty cards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Custom branding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Staff roles & permissions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Unlimited customers</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Start Free Trial</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-slate-200 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">Custom</div>
                  <div className="text-slate-600">contact us</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">API access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-600">White-label options</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Loved by small business owners
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg mb-6">
                  "Perkpad transformed our customer retention. We've seen a 40% increase in repeat visits since launching our digital punch card!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Sarah Martinez</div>
                    <div className="text-slate-600">Brew & Bean Café</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg mb-6">
                  "Setup was incredibly easy. My customers love not having to carry physical punch cards anymore. It's a win-win!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Mike Johnson</div>
                    <div className="text-slate-600">Fresh Cuts Barbershop</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg mb-6">
                  "The analytics help me understand my customers better. I can see exactly who my loyal customers are and reward them accordingly."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">LC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Lisa Chen</div>
                    <div className="text-slate-600">Bloom Flower Boutique</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-2xl px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">
                Can customers use this without downloading an app?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Yes! That's the beauty of Perkpad. Customers simply use their phone's camera to scan your QR code - no app downloads required. It works through their web browser, making it incredibly convenient for everyone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-2xl px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">
                How do I upgrade or cancel my subscription?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                You can upgrade, downgrade, or cancel your subscription at any time through your account dashboard. There are no long-term contracts or cancellation fees. If you cancel, your account will remain active until the end of your current billing period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-2xl px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">
                What happens to my customer data if I cancel?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Your customer data is always yours. Before canceling, you can export all your customer information and loyalty program data. We'll keep your data secure for 30 days after cancellation in case you decide to reactivate your account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-2xl px-6 border-0 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:no-underline">
                Do you offer support for setting up my loyalty program?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Absolutely! All paid plans include email support, and we have extensive setup guides and video tutorials. Pro and Enterprise customers get priority support, and Enterprise customers can schedule one-on-one setup calls with our team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to build customer loyalty that lasts?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of small businesses using Perkpad to create meaningful connections with their customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-slate-50 text-lg px-8 py-6 rounded-xl">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 text-lg px-8 py-6 rounded-xl">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Perkpad</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                The easiest way for small businesses to build customer loyalty with digital punch cards and rewards.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-teal-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-teal-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">
              © 2024 Perkpad. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
