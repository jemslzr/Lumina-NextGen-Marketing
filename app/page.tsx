"use client";

import { useState } from "react";

export default function Home() {
  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // --- HANDLE INPUT CHANGE ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- HANDLE FORM SUBMIT ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      //  N8N WEBHOOK URL
      const webhookUrl = "https://jmcz.app.n8n.cloud/webhook-test/contact-form";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f4f4f5] overflow-x-hidden">
      
      {/* ================= HERO SECTION (Landing Page) ================= */}
      {/* Added bg-[#1e1b4b] here so the top is purple, matching the Navbar */}
      <section className="w-full bg-[#1e1b4b] text-white pt-20 pb-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/50 rounded-full border border-purple-700/50">
            AI-Powered Innovation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 text-transparent bg-clip-text">
            Lumina Agency
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build intelligent digital solutions that automate workflows and elevate user experiences.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-8 py-4 bg-white text-[#1e1b4b] font-bold rounded-lg hover:bg-gray-100 transition shadow-lg">
              Start a Project
            </a>
            <a href="#expertise" className="px-8 py-4 bg-transparent border border-gray-500 text-white font-medium rounded-lg hover:border-white transition">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE SECTION ================= */}
      <section id="expertise" className="w-full max-w-6xl px-6 py-24 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e1b4b]">Our Expertise</h2>
          <p className="text-gray-600">Cutting-edge technologies we use to scale your business.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-6 flex items-center justify-center text-2xl">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-[#1e1b4b]">AI Integration</h3>
            <p className="text-gray-600 leading-relaxed">
              Seamlessly integrate LLMs like GPT-4 and Claude to automate customer support and data analysis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-6 flex items-center justify-center text-2xl">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-[#1e1b4b]">Modern Web Dev</h3>
            <p className="text-gray-600 leading-relaxed">
              Blazing fast websites built with Next.js, React, and Tailwind CSS for optimal performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg mb-6 flex items-center justify-center text-2xl">☁️</div>
            <h3 className="text-xl font-bold mb-3 text-[#1e1b4b]">Cloud Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Scalable and secure infrastructure hosted on AWS to ensure 99.9% uptime for your apps.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION (Your Split Card) ================= */}
      <section id="contact" className="w-full max-w-6xl px-6 pb-24 scroll-mt-20 flex justify-center">
        
        {/* THIS IS THE CARD DESIGN YOU LIKED */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl">
          
          {/* LEFT SIDE: Purple Gradient */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-[#2e1065] to-[#4c1d95] p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let's Talk.</h2>
              <p className="text-purple-200 text-sm leading-relaxed">
                Ready to start your project? Fill out the form and our AI agent will get back to you instantly.
              </p>
            </div>
            <div className="mt-8 space-y-2 text-sm text-purple-300">
              <p>📩 contact@lumina.agency</p>
              <p>📍 Manila, Philippines</p>
            </div>
          </div>

          {/* RIGHT SIDE: White Form */}
          <div className="w-full md:w-1/2 p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-purple-500 focus:bg-white transition"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-purple-500 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-purple-500 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-3 rounded-lg font-bold text-white uppercase tracking-wider text-sm transition-all duration-200 ${
                  status === "loading" 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#0f172a] hover:bg-purple-900 hover:shadow-lg"
                }`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="p-3 bg-green-50 text-green-600 text-xs rounded-lg text-center font-medium">
                  ✅ Message sent! Check your email.
                </div>
              )}
              
              {status === "error" && (
                <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg text-center font-medium">
                  ❌ Something went wrong. Try again.
                </div>
              )}
            </form>
          </div>
        </div>

      </section>

    </main>
  );
}