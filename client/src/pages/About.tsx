import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Brain, Heart, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="w-screen min-h-screen dark bg-black text-accent-foreground">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://cdn3.iconfinder.com/data/icons/education-science-vol-2-1/512/psychology_brain_neuro_mind-512.png"
                className="w-16 h-16 mr-4"
                alt="MindSync Logo"
              />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MindSync
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your AI-powered companion for mental wellness, designed to help you overcome depression, stress, anxiety, and restlessness through personalized therapy and interactive experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              At MindSync, we believe that mental health support should be accessible, personalized, and effective. 
              Our platform combines cutting-edge AI technology with evidence-based therapeutic approaches to create 
              a comprehensive mental wellness ecosystem that adapts to your unique needs and helps you build 
              resilience, find peace, and achieve emotional balance.
            </p>
          </div>
        </section>

        {/* Features Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Makes MindSync Special</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI-Powered Mood Analysis</h3>
              <p className="text-gray-300">
                Advanced AI algorithms analyze your daily thoughts and emotions, providing real-time insights 
                into your mental state and helping you understand patterns in your mood.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
              <Heart className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personalized Therapy Plans</h3>
              <p className="text-gray-300">
                Get customized mental health plans tailored to your specific needs, including guided meditation, 
                therapeutic activities, and personalized challenges designed for your journey.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 AI Support</h3>
              <p className="text-gray-300">
                Access round-the-clock mental health support through our intelligent chatbot, providing 
                immediate guidance and emotional support whenever you need it.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Therapist Marketplace</h3>
              <p className="text-gray-300">
                Connect with licensed mental health professionals for virtual counseling sessions, 
                ensuring you have access to expert care when you need it most.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-colors">
              <div className="w-12 h-12 text-red-400 mb-4 flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Therapeutic Games</h3>
              <p className="text-gray-300">
                Engage with carefully designed games and challenges that promote mental wellness, 
                stress relief, and cognitive improvement in an enjoyable, interactive format.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-colors">
              <div className="w-12 h-12 text-indigo-400 mb-4 flex items-center justify-center">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Meditation & Mindfulness</h3>
              <p className="text-gray-300">
                Access guided meditation sessions, breathing exercises, and mindfulness practices 
                designed to reduce anxiety, improve focus, and promote inner peace.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Powered by Advanced Technology</h2>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">AI & Machine Learning</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Google Gemini 2.0 Flash for emotion detection</li>
                  <li>• Natural language processing for mood analysis</li>
                  <li>• Personalized recommendation algorithms</li>
                  <li>• Predictive analytics for mental health patterns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Modern Web Technologies</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• React 19 with TypeScript for robust frontend</li>
                  <li>• Express.js backend with RESTful APIs</li>
                  <li>• Real-time data processing and analysis</li>
                  <li>• Responsive design for all devices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">contact@mindsync.app</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-300">123 Wellness Street<br />Mental Health District, MH 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-purple-400">Follow Us</h3>
                <div className="space-y-4">
                  <a href="https://github.com/mindsync" className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <Github className="w-5 h-5 mr-3" />
                    <span>GitHub</span>
                  </a>
                  
                  <a href="https://linkedin.com/company/mindsync" className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5 mr-3" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a href="https://twitter.com/mindsync" className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <div className="w-5 h-5 mr-3 flex items-center justify-center">
                      <span className="text-sm">𝕏</span>
                    </div>
                    <span>Twitter/X</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Mental Wellness Journey?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered the power of AI-driven mental health support. 
            Take the first step towards a happier, healthier you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg">
                Get Started Now
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="px-8 py-3 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </section>
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
            This is a demo application. Contact information is temporary for demonstration purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}
