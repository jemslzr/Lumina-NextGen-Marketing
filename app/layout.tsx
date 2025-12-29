import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Make sure these paths match your folder structure exactly
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumina Agency",
  description: "AI Powered Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* The Navbar sits on top of everything */}
        <Navbar />
        
        {/* pt-20 adds padding to the top so your content 
           doesn't get hidden behind the fixed Navbar 
           min-h-screen ensures the footer stays at the bottom
        */}
        <main className="min-h-screen pt-20 bg-[#1e1b4b]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}