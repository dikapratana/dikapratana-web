"use client";

import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeroSection = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="home"
      className="relative pt-28 md:pt-32 pb-20 md:pb-24 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-200 mb-6 md:mb-8">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-orange-600 font-medium text-sm">
            ✨ Available for Freelance
          </span>
        </div>

        <h1 className="text-xl md:text-4xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight">
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Building Modern Web & Mobile Applications
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
          I develop high-performance web and mobile applications with modern UI,
          clean architecture, and scalable code — built for real-world products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group bg-linear-to-r from-orange-500 to-pink-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('footer')}
            className="bg-white/80 backdrop-blur text-gray-800 px-8 md:px-10 py-3 md:py-4 rounded-2xl font-bold hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-orange-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </button>
          <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background rounded */}
    <rect width="64" height="64" rx="16" fill="#0F172A" />

    {/* Main D shape */}
    <g>
      {/* Base D */}
      <path
        d="M20 12 H36 C46 12 46 52 36 52 H20 V12 Z"
        fill="url(#baseGradient)"
      />
      {/* Fold highlight */}
      <polygon
        points="36,12 36,52 44,32"
        fill="url(#foldGradient)"
      />
    </g>

    <defs>
      <linearGradient id="baseGradient" x1="20" y1="12" x2="36" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4F46E5" />
        <stop offset="1" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="foldGradient" x1="36" y1="12" x2="44" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" />
        <stop offset="1" stopColor="#22D3EE" />
      </linearGradient>
    </defs>
  </svg>
        </div>
      </div>
    </div>
  );
};
