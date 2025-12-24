import dynamic from "next/dynamic";

const AboutSection = dynamic(
  () => import("@/features/home/about/about").then((m) => m.About),
);

export default AboutSection;
