import dynamic from "next/dynamic";

const ExperienceSection = dynamic(
  () => import("@/features/home/experience/experience").then((m) => m.Experience),
);

export default ExperienceSection;
