"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import Investments from "./components/Investments";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <div
        className="min-h-screen bg-[#0B0E11] text-[#EAE7DE]"
        style={{
          backgroundImage:
            "radial-gradient(60%_50%_at_50%_-10%,rgba(197,165,114,0.12),transparent),radial-gradient(40%_40%_at_10%_10%,rgba(107,122,143,0.10),transparent),linear-gradient(#0B0E11,#0B0E11)",
        }}
      >
        {/* Subtle noise overlay */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-soft-light"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.35"/></svg>\')',
          }}
        />
        <Hero />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
