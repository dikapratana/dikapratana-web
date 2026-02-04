/* eslint-disable @typescript-eslint/no-require-imports */
import {
  Code2,
  Palette,
  Rocket,
  Zap,
  Home,
  User,
  Code,
  Briefcase,
  Grid,
  Mail,
} from "lucide-react";

import Pijar from "@/assets/images/portfolio/pijar.png";
import Tepi from "@/assets/images/portfolio/tepi.png";
import Yakes from "@/assets/images/portfolio/yakes.jpg";
import MariLiburan from "@/assets/images/portfolio/mariliburan.png";
import SistemAntrian from "@/assets/images/portfolio/kiosk.png";
import Mdj from "@/assets/images/portfolio/mdj.png";
import Epark from "@/assets/images/portfolio/epark.jpg";
import Rain from "@/assets/images/portfolio/rainpos.png";

const skills = [
  {
    name: "React.js",
    color: "from-cyan-400 to-blue-500",
    icon: require("@/assets/images/react.svg").default,
  },
  {
    name: "React Native",
    color: "from-cyan-400 to-blue-500",
    icon: require("@/assets/images/react.svg").default,
  },
  {
    name: "Next.js",
    color: "from-gray-700 to-gray-900",
    icon: require("@/assets/images/next.svg").default,
  },
  {
    name: "Vue.js",
    color: "from-green-400 to-emerald-600",
    icon: require("@/assets/images/vue.svg").default,
  },
  {
    name: "Flutter",
    color: "from-blue-400 to-cyan-500",
    icon: require("@/assets/images/flutter.svg").default,
  },
  {
    name: "Shadcn UI",
    color: "from-gray-700 to-gray-900",
    icon: require("@/assets/images/shadcn.svg").default,
  },
  {
    name: "Tailwind CSS",
    color: "from-green-400 to-green-600",
    icon: require("@/assets/images/tailwind-css-2.svg").default,
  },
  {
    name: "Dart",
    color: "from-teal-500 to-cyan-600",
    icon: require("@/assets/images/dart.svg").default,
  },
  {
    name: "PHP",
    color: "from-indigo-500 to-purple-600",
    icon: require("@/assets/images/php-6.svg").default,
  },
  {
    name: "JavaScript",
    color: "from-yellow-500 to-yellow-600",
    icon: require("@/assets/images/js.svg").default,
  },
  {
    name: "TypeScript",
    color: "from-indigo-500 to-purple-600",
    icon: require("@/assets/images/ts.svg").default,
  },
  {
    name: "Bloc",
    color: "from-green-400 to-green-600",
    icon: require("@/assets/images/bloc.svg").default,
  },
  {
    name: "Riverpood",
    color: "from-blue-400 to-blue-600",
    icon: require("@/assets/images/riverpood.svg").default,
  },
  {
    name: "Laravel",
    color: "from-red-500 to-orange-600",
    icon: require("@/assets/images/laravel.svg").default,
  },
  {
    name: "MySQL",
    color: "from-orange-500 to-amber-600",
    icon: require("@/assets/images/mysql.svg").default,
  },
  {
    name: "Docker",
    color: "from-blue-400 to-cyan-500",
    icon: require("@/assets/images/docker.svg").default,
  },
  {
    name: "Redux",
    color: "from-indigo-400 to-indigo-500",
    icon: require("@/assets/images/redux.svg").default,
  },
  {
    name: "React Query",
    color: "from-red-400 to-red-500",
    icon: require("@/assets/images/react-query.svg").default,
  },
];

const experiences = [
  {
    company: "TepiBojonegoro -  Skyrain Studio",
    position: "Frontend Web & Mobile Developer",
    period: "10/2024 – Present",
    location: "Bojonegoro, Indonesia",
    description:
      "Developed responsive web and mobile applications from designs, implementing clean code, reusable components, and real-time features using React.js, Next.js, Flutter, React Native, and Firebase.",
    achievements: [
      "Delivered 6 integrated applications on schedule.",
      "Improved cross-platform UI/UX consistency with reusable components.",
      "Reduced UI bugs and browser compatibility issues through standardized frontend structures.",
      "Enabled local SMEs to adopt digital transaction platforms effectively.",
    ],
    color: "from-orange-400 to-pink-500",
  },
  {
    company: "Pijar Sekolah - PT Telkom (via Skyrain Studio)",
    position: "Frontend Developer",
    period: "12/2020 - 10/2024",
    location: "Jakarta (Remote from Bojonegoro), Indonesia",
    description:
      "Developed responsive web applications using React.js, Next.js, and Tailwind CSS with clean code and reusable components. Implemented micro-frontend architecture, Firebase real-time features, SSO authentication, and Google Analytics integration. Ensured high code quality through unit testing (80%+ coverage) and collaborated with cross-functional teams in an Agile/Scrum environment.",
    achievements: [
      "Delivered 5+ web applications on schedule.",
      "Led a project as PIC, managing 2 frontend developers.",
      "Maintained code consistency and quality through regular code reviews.",
      "Prepared applications for production with standardized testing and QA practices.",
    ],
    color: "from-blue-400 to-cyan-500",
  },
  {
    company: "Skyrain Studio (Collaboration with Upward Project)",
    position: "Frontend Developer",
    period: "01/2018 - 11/2019",
    location: "Surabaya, Indonesia",
    description:
      "Developed and maintained responsive web applications for various Upward Project clients using Vue.js, integrated with Laravel and CodeIgniter backends. Translated Adobe XD designs into cross-browser, cross-platform interfaces, applied clean code practices, and collaborated with backend teams for API integration and feature development. Optimized web performance for stability and efficiency across devices..",
    achievements: [
      "Contributed to 5+ client web applications with diverse business requirements.",
      "Delivered projects on time while meeting client quality standards.",
      "nhanced user experience through responsive UI and performance optimization.",
    ],
    color: "from-purple-400 to-indigo-500",
  },
];

const portfolios = [
  {
    title: "Pijar Sekolah",
    category: "Frontend Developer - Skyrain Studio",
    image: Pijar,
    description:
      "Digital education platform by Telkom Indonesia, providing online learning, school management, computer-based exams, and assignments to make teaching and learning more efficient.",
    tech: ["React.js", "Tailwind CSS", "React Query"],
  },
  {
    title: "TepiBojonegoro",
    category: "Frontend Web & Mobile Developer - Skyrain Studio",
    image: Tepi,
    description:
      "Platform that empowers local Bojonegoro SMEs by digitizing their transactions.",
    tech: ["React.js", "Next.js", "Flutter", "React Native"],
  },
  {
    title: "Yakes Intranet",
    category: "Fullstack Developer - Skyrain Studio",
    image: Yakes,
    description:
      "Internal platform for the health foundation’s employees, providing health information, announcements, updates, and resources to support staff well-being and communication.",
    tech: ["CodeIgniter", "MySQL", "jQuery", "Tailwind CSS"],
  },
  {
    title: "MariLiburan",
    category: "Frontend Developer - Skyrain Studio",
    image: MariLiburan,
    description:
      "An information platform for Indonesian tourist destinations, with ticket booking and merchandise ordering features.",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Queue System",
    category: "Frontend Developer - Skyrain Studio",
    image: SistemAntrian,
    description:
      "Queue management platform for the Tax Service Office in Tuban, designed to streamline customer service and reduce waiting times.",
    tech: ["React.js", "React Native", "Tailwind CSS", "Socket.io"],
  },
  {
    title: "My Divorce Journey",
    category: "Frontend Developer - Skyrain Studio x Upward Project",
    image: Mdj,
    description:
      "Online platform providing divorce consultation services, legal guidance, and resources to support users throughout the divorce process.",
    tech: ["Laravel", "Jquery"],
  },
  {
    title: "Arboretum Park",
    category: "Frontend Developer - Skyrain Studio x Upward Project",
    image: Epark,
    description:
      "Information platform showcasing the locations and collections of plants within the peatland program, part of Pertamina’s CSR initiative for environmental conservation, education, and raising public awareness about ecosystem sustainability.",
    tech: ["Laravel", "Jquery"],
  },
  {
    title: "Rain POS",
    category: "Frontend Developer - Skyrain Studio x Upward Project",
    image: Rain,
    description:
      "A web-based Point of Sale (POS) application for managing sales, inventory, and transactions efficiently, designed to streamline business operations and improve overall workflow.",
    tech: ["Vue.js"],
  },
  {
    title: "KBIH NH",
    category: "Frontend Developer - Skyrain Studio x Upward Project",
    image: null,
    description:
      "An online platform for Hajj services, providing pilgrims with guidance, registration, and information to facilitate a smooth and organized pilgrimage experience.",
    tech: ["CodeIgniter", "jQuery"],
  },
  {
    title: "Admin Cari Dana",
    category: "Frontend Developer - Skyrain Studio x Upward Project",
    image: null,
    description:
      "An administrative web platform for managing fundraising campaigns, monitoring donations, and overseeing project progress efficiently.",
    tech: ["Laravel", "jQuery"],
  },
];

const services = [
  {
    icon: <Code2 className="w-10 h-10" />,
    title: "Full-Stack Development",
    description:
      "Building modern, scalable web applications from concept to deployment.",
    gradient: "from-blue-400 to-cyan-500",
    features: [
      "React & Next.js",
      "Laravel & PHP",
      "API Development",
      "Database Design",
    ],
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces with focus on usability.",
    gradient: "from-pink-400 to-rose-500",
    features: [
      "Responsive Design",
      "Design Systems",
      "Prototyping",
      "User Research",
    ],
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Mobile Development",
    description: "Cross-platform mobile apps with native performance.",
    gradient: "from-purple-400 to-indigo-500",
    features: [
      "Flutter & Dart",
      "iOS & Android",
      "App Store Deploy",
      "Optimization",
    ],
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Startup Consulting",
    description: "Technical strategy and MVP development for startups.",
    gradient: "from-orange-400 to-red-500",
    features: [
      "MVP Development",
      "Tech Strategy",
      "Team Building",
      "Architecture",
    ],
  },
];

const menuItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "portfolio", label: "Portfolio", icon: Grid },
  { id: "contact", label: "Contact", icon: Mail },
];
export const DATA_HOME = {
  skills,
  experiences,
  portfolios,
  services,
  menuItems,
};
