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
      // 👇 REPLACE WITH YOUR ACTUAL N8N WEBHOOK URL
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
    // Main container centers the card in the middle of the screen
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center p-6 bg-[#f4f4f5]">
      
      {/* This is your "Previous Design" Card 
          Added id="contact" so the Navbar link jumps here
      */}
      <div id="contact" className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl">
        
        {/* LEFT SIDE: "Let's Talk" (Purple Gradient) */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#2e1065] to-[#4c1d95] p-12 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Let's Talk.</h1>
            <p className="text-purple-200 text-sm leading-relaxed">
              Ready to start your project? Fill out the form and our AI agent will get back to you instantly.
            </p>
          </div>
          
          <div className="mt-8 space-y-2 text-sm text-purple-300">
            <p>contact@lumina.agency</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        {/* RIGHT SIDE: The Form (White Background) */}
        <div className="w-full md:w-1/2 p-12 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
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
            
            {/* Email Field */}
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

            {/* Message Field */}
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

            {/* Submit Button */}
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

            {/* Success/Error Messages */}
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

    </main>
  );
}