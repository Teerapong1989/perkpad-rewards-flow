// ABOUTME: This page provides information about the company, including the mission, team, and why customers should trust Perkpad.
// ABOUTME: It includes sections for company story, mission, values, and team information to build trust and credibility.

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Shield, Zap, Heart, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Building the Future of Customer Loyalty
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help small businesses create meaningful connections with their customers through modern, engaging loyalty programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-primary-dark hover:bg-gray-50 hover:shadow-xl text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              onClick={() => window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer')}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-primary-dark text-lg px-8 py-6 rounded-xl transition-all duration-300 font-semibold"
              asChild
            >
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Empowering small businesses to thrive by making customer loyalty simple, engaging, and profitable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Simplicity First</h3>
              <p className="text-slate-600">
                We believe loyalty programs should be simple to set up and easy for customers to use. No complex systems or confusing interfaces.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Customer Connection</h3>
              <p className="text-slate-600">
                Every interaction should strengthen the relationship between businesses and their customers, creating lasting bonds.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Small Business Success</h3>
              <p className="text-slate-600">
                We're dedicated to helping small businesses compete with larger companies by leveraging the power of personalized loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Perkpad was born from a simple observation: small businesses were losing customers to forgotten punch cards and outdated loyalty systems. We saw amazing local businesses struggling to compete with big chains that had sophisticated customer retention programs.
                </p>
                <p>
                  Our founder, while visiting his favorite coffee shop, watched the owner throw away dozens of forgotten punch cards. That moment sparked an idea: what if loyalty could be digital, engaging, and actually fun for customers?
                </p>
                <p>
                  Today, we're proud to help hundreds of small businesses create stronger relationships with their customers through innovative loyalty experiences that customers actually love to use.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                alt="Team working on laptops with analytics data"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary">500+</div>
                  <div className="text-sm text-slate-600">Happy Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do and how we build products that truly serve our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Trust & Security</h3>
              <p className="text-slate-600 text-sm">
                We protect customer data with enterprise-grade security and complete transparency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Innovation</h3>
              <p className="text-slate-600 text-sm">
                We constantly evolve our platform based on real customer needs and feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Care</h3>
              <p className="text-slate-600 text-sm">
                Every interaction with our team should feel personal and genuinely helpful.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Community</h3>
              <p className="text-slate-600 text-sm">
                We believe in the power of local businesses to strengthen communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using Perkpad to create meaningful customer connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-primary-dark hover:bg-gray-50 hover:shadow-xl text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              onClick={() => window.open('https://app.perkpad.io', '_blank', 'noopener,noreferrer')}
            >
              Start Your 5-Minute Setup (Free)
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-primary-dark text-lg px-8 py-6 rounded-xl transition-all duration-300 font-semibold"
              asChild
            >
              <Link to="/contact">
                Talk to Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;