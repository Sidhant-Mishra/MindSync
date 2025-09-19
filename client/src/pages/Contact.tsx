import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CreditCard, 
  Shield, 
  CheckCircle,
  Star,
  MessageCircle,
  Calendar,
  DollarSign,
  Zap,
  Heart,
  Brain
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  });

  const [paymentData, setPaymentData] = useState({
    plan: 'basic',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: 'general'
    });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Payment processed successfully! (This is a demo - no real payment was charged)');
  };

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals starting their mental wellness journey',
      features: [
        'AI Mood Tracking',
        'Basic Meditation Library',
        'Daily Check-ins',
        'Email Support',
        'Basic Progress Reports'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '$59',
      period: '/month',
      description: 'Most popular for comprehensive mental health support',
      features: [
        'Everything in Basic',
        'Personalized Therapy Plans',
        'Unlimited Meditation Sessions',
        'AI Chatbot Support 24/7',
        'Advanced Analytics',
        'Priority Support',
        'Therapist Marketplace Access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: '$99',
      period: '/month',
      description: 'For organizations and families',
      features: [
        'Everything in Premium',
        'Family/Team Management',
        'Custom Branding',
        'API Access',
        'Dedicated Account Manager',
        'Custom Integrations',
        'White-label Solutions'
      ],
      popular: false
    }
  ];

  return (
    <div className="w-screen min-h-screen dark bg-black text-accent-foreground">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Contact & Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team or choose the perfect plan for your mental wellness journey. 
              We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        <Tabs defaultValue="contact" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="pricing">Pricing Plans</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Contact Form */}
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-blue-400" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="How can we help?"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-green-400" />
                      Office Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-300">Delhi, India 110043</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-300">+91 9810290156</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-300">sidhantmishra2003@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-300">Mon-Fri: 9AM-6PM IST<br />Sat: 10AM-4PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                      Schedule a Call
                    </CardTitle>
                    <CardDescription>
                      Book a free 15-minute consultation with our team
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      Schedule Free Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Select the perfect plan for your mental wellness journey. All plans include our core AI-powered features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`bg-gray-900/50 border-gray-700 relative ${
                    plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Payment Demo Section */}
            <Card className="bg-gray-900/50 border-gray-700 mt-12">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-green-400" />
                  Demo Payment Processing
                </CardTitle>
                <CardDescription>
                  This is a demonstration of our payment system. No real charges will be made.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="plan">Select Plan</Label>
                      <select
                        id="plan"
                        name="plan"
                        value={paymentData.plan}
                        onChange={handlePaymentChange}
                        className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                      >
                        {pricingPlans.map((plan) => (
                          <option key={plan.id} value={plan.id}>
                            {plan.name} - {plan.price}{plan.period}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={paymentData.email}
                        onChange={handlePaymentChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={handlePaymentChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handlePaymentChange}
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={paymentData.name}
                        onChange={handlePaymentChange}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Process Demo Payment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    Mental Health Support
                  </CardTitle>
                  <CardDescription>
                    If you're experiencing a mental health crisis, please contact these resources immediately.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Crisis Hotlines</h4>
                    <p className="text-sm text-gray-300">
                      <strong>National Suicide Prevention Lifeline:</strong> 988<br />
                      <strong>Crisis Text Line:</strong> Text HOME to 741741<br />
                      <strong>Emergency:</strong> 911
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">24/7 Support Resources</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• National Alliance on Mental Illness (NAMI)</li>
                      <li>• Mental Health America</li>
                      <li>• Crisis Intervention Services</li>
                      <li>• Local Mental Health Centers</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-blue-400" />
                    Technical Support
                  </CardTitle>
                  <CardDescription>
                    Need help with the app? Our technical team is here to assist you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-sm text-gray-400">Available 24/7</p>
                      </div>
                      <Button size="sm" variant="outline">Start Chat</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-gray-400">sidhantmishra2003@gmail.com</p>
                      </div>
                      <Button size="sm" variant="outline">Send Email</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-gray-400">+91 9810290156</p>
                      </div>
                      <Button size="sm" variant="outline">Call Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Is my data secure and private?</h4>
                    <p className="text-sm text-gray-300">
                      Yes, we use enterprise-grade encryption and comply with HIPAA standards to protect your mental health data.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Can I cancel my subscription anytime?</h4>
                    <p className="text-sm text-gray-300">
                      Absolutely! You can cancel your subscription at any time from your account settings with no cancellation fees.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Do you offer family plans?</h4>
                    <p className="text-sm text-gray-300">
                      Yes, our Enterprise plan includes family management features and can accommodate up to 10 family members.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Is there a free trial available?</h4>
                    <p className="text-sm text-gray-300">
                      Yes! We offer a 14-day free trial for all plans. No credit card required to start.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-gray-400">
            © 2024 MindSync. All rights reserved. | 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-2">Privacy Policy</a> | 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-2">Terms of Service</a>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            This is a demo application. All contact information and payment processing are for demonstration purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}
