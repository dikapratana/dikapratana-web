import dynamic from "next/dynamic";

const SkillsSection = dynamic(
  () => import("@/features/home/skills/skills").then((m) => m.Skills),
);

export default SkillsSection;
