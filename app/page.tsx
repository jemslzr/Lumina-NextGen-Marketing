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
      // 👇 REPLACE THIS WITH YOUR ACTUAL N8N WEBHOOK URL 👇
      const webhookUrl = "https://jmcz.app.n8n.cloud/webhook-test/contact-form";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#1e1b4b] text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="w-full max-w-6xl px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full border border-purple-700/50">
          AI-Powered Innovation
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 text-transparent bg-clip-text">
          Lumina Agency
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          We build intelligent digital solutions that automate workflows and elevate user experiences.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="px-8 py-4 bg-white text-[#1e1b4b] font-bold rounded-lg hover:bg-gray-100 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Start a Project
          </a>
          <a href="#expertise" className="px-8 py-4 bg-transparent border border-gray-600 text-white font-medium rounded-lg hover:border-white transition">
            Explore Services
          </a>
        </div>
      </section>

      {/* ================= EXPERTISE SECTION ================= */}
      {/* id="expertise" allows the Navbar to jump here */}
      <section id="expertise" className="w-full max-w-6xl px-6 py-24 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-gray-400">Cutting-edge technologies we use to scale your business.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 bg-[#2e1065]/50 border border-purple-800/50 rounded-2xl hover:bg-[#2e1065] transition duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg mb-6 flex items-center justify-center text-2xl">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI Integration</h3>
            <p className="text-gray-400 leading-relaxed">
              Seamlessly integrate LLMs like GPT-4 and Claude to automate customer support and data analysis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-[#2e1065]/50 border border-purple-800/50 rounded-2xl hover:bg-[#2e1065] transition duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg mb-6 flex items-center justify-center text-2xl">🚀</div>
            <h3 className="text-xl font-bold mb-3">Modern Web Dev</h3>
            <p className="text-gray-400 leading-relaxed">
              Blazing fast websites built with Next.js, React, and Tailwind CSS for optimal performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-[#2e1065]/50 border border-purple-800/50 rounded-2xl hover:bg-[#2e1065] transition duration-300">
            <div className="w-12 h-12 bg-pink-500 rounded-lg mb-6 flex items-center justify-center text-2xl">☁️</div>
            <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
            <p className="text-gray-400 leading-relaxed">
              Scalable and secure infrastructure hosted on AWS to ensure 99.9% uptime for your apps.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      {/* id="contact" allows the Navbar to jump here */}
      <section id="contact" className="w-full max-w-6xl px-6 py-24 mb-20 scroll-mt-20">
        <div className="bg-[#17153b] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-purple-900/30">
          
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-[#2e1065] to-[#1e1b4b] p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Let's Talk.</h2>
            <p className="text-purple-200 text-lg mb-8">
              Ready to start your project? Fill out the form and our AI agent will get back to you instantly.
            </p>
            <div className="space-y-4 text-sm text-purple-300">
              <p>📩 contact@lumina.agency</p>
              <p>📍 Manila, Philippines</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2 p-12 bg-[#0f0e17]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-[#1e1b4b] border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#1e1b4b] border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-[#1e1b4b] border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-4 rounded-lg font-bold text-white transition duration-200 ${
                  status === "loading" 
                    ? "bg-gray-600 cursor-not-allowed" 
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg"
                }`}
              >
                {status === "loading" ? "Sending..." : "Send Message 🚀"}
              </button>

              {status === "success" && (
                <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
                  ✅ Message sent! Check your email for an instant response.
                </div>
              )}
              
              {status === "error" && (
                <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}