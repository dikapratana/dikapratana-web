'use client';

import { ArrowRight, Mail, Sparkles } from "lucide-react";

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
      className="relative pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-6"
    >
      <div className="max-w-3xl sm:max-w-4xl md:max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/60 backdrop-blur-sm rounded-full border border-orange-200 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-orange-600 font-medium">
            ✨ Available for Freelance
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Building Modern Web & Mobile Applications
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12">
          I develop high-performance web and mobile applications with modern UI,
          clean architecture, and scalable code — built for real-world products.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="group bg-linear-to-r from-orange-500 to-pink-500 text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 cursor-pointer text-sm sm:text-base md:text-lg"
          >
            View My Work
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("footer")}
            className="bg-white/80 backdrop-blur text-gray-800 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-2xl font-bold hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-orange-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base md:text-lg"
          >
            <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};
