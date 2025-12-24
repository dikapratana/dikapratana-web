'use client';

import dynamic from "next/dynamic";

const PortfolioSection = dynamic(
  () => import("@/features/home/protfolio/portfolio").then((m) => m.Portfolio),
    { ssr: false }
);

export default PortfolioSection;
