"use client";

import { DATA_HOME } from "@/data/home";
import { Code2Icon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "portfolio",
        "services",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
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
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-linear-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"
          style={{
            top: "10%",
            left: "10%",
            transform: `translateY(${scrollY * 0.3}px) rotate(${
              scrollY * 0.1
            }deg)`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-linear-to-br from-pink-300/30 to-rose-300/30 rounded-full blur-3xl"
          style={{
            top: "50%",
            right: "10%",
            transform: `translateY(${scrollY * -0.2}px) rotate(${
              -scrollY * 0.15
            }deg)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-linear-to-br from-purple-300/30 to-indigo-300/30 rounded-full blur-3xl"
          style={{
            bottom: "20%",
            left: "30%",
            transform: `translateY(${scrollY * 0.15}px) rotate(${
              scrollY * 0.2
            }deg)`,
          }}
        />
        <div
          className="absolute w-32 h-32 border-4 border-orange-300/30 rounded-lg hidden md:block"
          style={{
            top: "20%",
            right: "20%",
            transform: `rotate(${scrollY * 0.2}deg)`,
          }}
        />
        <div
          className="absolute w-24 h-24 border-4 border-pink-300/30 rounded-lg hidden md:block"
          style={{
            bottom: "30%",
            left: "15%",
            transform: `rotate(${-scrollY * 0.25}deg)`,
          }}
        />
      </div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3 mt-4" : "py-4"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "max-w-5xl mx-4 md:mx-auto bg-white/80 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-200/50"
              : "max-w-7xl mx-auto  backdrop-blur-xl "
          }`}
        >
          <div className="px-4 md:px-6 py-3 flex justify-between items-center">
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-linear-to-br from-orange-400 via-pink-400 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <Code2Icon className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-800">
                MDPP
              </span>
            </div>

            <ul className="hidden lg:flex items-center gap-6">
              {DATA_HOME.menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative transition-colors duration-300 flex items-center gap-2 text-sm font-medium cursor-pointer ${
                      activeSection === item.id
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </li>
                );
              })}
            </ul>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 items-center gap-2 text-sm"
            >
              Ask us!
            </button>

            <button
              className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-60 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-2xl shadow-2xl z-60 lg:hidden transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between mb-8">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="space-y-2">
            {DATA_HOME.menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                  activeSection === item.id
                    ? "bg-linear-to-r from-orange-500 to-pink-500 text-white"
                    : "hover:bg-orange-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
