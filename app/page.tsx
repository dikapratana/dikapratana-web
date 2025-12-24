import AboutSection from "@/features/home/about";
import HeroSection from "@/features/home/hero";
import SkillsSection from "../features/home/skills";
import ExperienceSection from "@/features/home/experience";
import PortfolioSection from "@/features/home/protfolio";

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-pink-50 to-purple-50 overflow-x-hidden">
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <PortfolioSection/>
      {/* <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style> */}
    </div>
  );
}