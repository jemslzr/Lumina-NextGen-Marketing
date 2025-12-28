"use client";

import React, { useState } from 'react';
import { Send, CheckCircle, Zap, BarChart, Globe } from 'lucide-react';

export default function Home() {
  // 1. State Management
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // 2. The Submission Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // 🔴 IMPORTANT: Replace this with your actual n8n Webhook URL later
    const N8N_WEBHOOK_URL = 'https://jmcz.app.n8n.cloud/webhook-test/contact-form';

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 text-white pt-32 pb-40 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-6 border border-purple-500/30">
            Next-Gen Marketing
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Elevate Your Brand with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Lumina.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            We fuse data-driven strategy with world-class creative design to scale your business in the digital age.
          </p>
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-purple-500/25">
            Get Your Free Audit
          </a>
        </div>
      </header>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-slate-600">Comprehensive solutions for modern growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO & Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Dominate search rankings and understand your customer behavior with advanced data tracking.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automation & AI</h3>
              <p className="text-slate-600 leading-relaxed">
                Streamline your workflows and customer interactions using cutting-edge AI integrations.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Branding</h3>
              <p className="text-slate-600 leading-relaxed">
                Craft a visual identity that resonates across borders and cultures with our design team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (The Integration Point) --- */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-12 bg-gradient-to-br from-purple-900 to-slate-900 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Talk.</h2>
              <p className="text-slate-300 mb-8">Ready to start your project? Fill out the form and our AI agent will get back to you instantly.</p>
            </div>
            <div className="space-y-4 text-sm text-slate-400">
              <p>contact@lumina.agency</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="md:w-1/2 p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5" /> Message sent! Check your email.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm text-center">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}