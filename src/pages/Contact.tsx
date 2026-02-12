// ABOUTME: This page provides multiple ways for customers to contact the company, including a contact form, support information, and direct contact methods.
// ABOUTME: It includes contact form, support hours, FAQ, and multiple contact options to help customers get the assistance they need.

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, MessageCircle, ArrowRight, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { trackConversion, trackEvent } from "@/utils/analytics";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent("contact_form_submit_attempt", { inquiryType: formData.inquiryType || "unspecified" });

    try {
      // Call the edge function to send emails
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      trackConversion("demo_request");
      trackEvent("contact_form_submit_success", { inquiryType: formData.inquiryType || "unspecified" });

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours. Check your email for confirmation.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      trackEvent("contact_form_submit_error", { inquiryType: formData.inquiryType || "unspecified" });
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at support@perkpad.io",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Clean and mobile optimized */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-[1.1] px-2">
            Get in{" "}
            <span className="text-gradient">touch</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
            Have questions about Perkpad? Need help setting up your loyalty program? We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-16">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">Email Support</CardTitle>
                <CardDescription>Get help with any questions or issues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-brand-primary font-semibold mb-4">support@perkpad.io</p>
                <p className="text-slate-600 text-sm">Response within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales & Pricing</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="demo">Request Demo</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-brand text-white hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-brand-primary" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-brand-primary/10 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <strong>Emergency Support:</strong> For urgent technical issues, email us with "URGENT" in the subject line.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-brand-primary" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-800">Perkpad</p>
                    <p className="text-slate-600">Boston, MA</p>
                    <p className="text-slate-600">United States</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Need Immediate Help?</CardTitle>
                  <CardDescription className="text-white/90">
                    Check out our comprehensive help center with guides, tutorials, and FAQs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="secondary"
                    className="bg-white text-brand-primary hover:bg-gray-100"
                    onClick={() => window.open('https://app.perkpad.io', '_blank')}
                  >
                    Visit Help Center
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions about Perkpad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">How quickly can I set up Perkpad?</h3>
                <p className="text-slate-600">Most businesses are up and running in under 5 minutes. Our setup wizard guides you through everything step by step.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">Do I need any special equipment?</h3>
                <p className="text-slate-600">No special equipment needed! Perkpad works on any smartphone, tablet, or computer with an internet connection.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">Can I customize the loyalty program?</h3>
                <p className="text-slate-600">Absolutely! You can customize rewards, add your branding, set stamp requirements, and create special campaigns.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">Is there a free trial?</h3>
                <p className="text-slate-600">Yes! We offer a 30-day free trial. The Free plan requires no credit card, while Pro and Growth plans require a credit card to start the trial.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">How do customers access their loyalty cards?</h3>
                <p className="text-slate-600">Customers simply scan a QR code at your business to access their digital loyalty card. No app download required!</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-2">What if I need help during setup?</h3>
                <p className="text-slate-600">Our support team is here to help! Contact us via chat, email, or schedule a one-on-one setup call.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;