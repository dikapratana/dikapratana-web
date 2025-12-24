'use client';

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/features/home/hero/hero").then((m) => m.HeroSection),
  {
    ssr: false,
  }
);

export default HeroSection;
