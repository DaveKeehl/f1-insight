import { ConstructorRef } from "@/utils/types/misc";

export const background: Record<string, string> = {
  alfa: "bg-teams-alfaromeo",
  alphatauri: "bg-teams-alphatauri",
  alpine: "bg-teams-alpine",
  aston_martin: "bg-teams-astonmartin",
  ferrari: "bg-teams-ferrari",
  haas: "bg-teams-haas",
  mclaren: "bg-teams-mclaren",
  mercedes: "bg-teams-mercedes",
  red_bull: "bg-teams-redbull",
  williams: "bg-teams-williams"
};

export const glow: Record<string, string> = {
  alfa: "shadow-glow-alfaromeo",
  alphatauri: "shadow-glow-alphatauri",
  alpine: "shadow-glow-alpine",
  aston_martin: "shadow-glow-astonmartin",
  ferrari: "shadow-glow-ferrari",
  haas: "shadow-glow-haas",
  mclaren: "shadow-glow-mclaren",
  mercedes: "shadow-glow-mercedes",
  red_bull: "shadow-glow-redbull",
  williams: "shadow-glow-williams"
};

export const shadow: Record<string, string> = {
  alfa: "shadow-alfaromeo",
  alphatauri: "shadow-alphatauri",
  alpine: "shadow-alpine",
  aston_martin: "shadow-astonmartin",
  ferrari: "shadow-ferrari",
  haas: "shadow-haas",
  mclaren: "shadow-mclaren",
  mercedes: "shadow-mercedes",
  red_bull: "shadow-redbull",
  williams: "shadow-williams"
};

export const gradient: Record<string, string> = {
  alfa: "from-[#360C14] via-teams-alfaromeo to-[#360C14]",
  alphatauri: "from-[#1E3039] via-teams-alphatauri to-[#1E3039]",
  alpine: "from-[#0A2839] via-teams-alpine to-[#0A2839]",
  aston_martin: "from-[#123028] via-teams-astonmartin to-[#123028]",
  ferrari: "from-[#3D0108] via-teams-ferrari to-[#3D0108]",
  haas: "from-[#383B3E] via-teams-haas to-[#383B3E]",
  mclaren: "from-[#452003] via-teams-mclaren to-[#452003]",
  mercedes: "from-[#0F332C] via-teams-mercedes to-[#0F332C]",
  red_bull: "from-[#0F2038] via-teams-redbull to-[#0F2038]",
  williams: "from-[#0B343D] via-teams-williams to-[#0B343D]"
};

export const teamsCorrections: { [key: string]: string } = {
  "Haas F1 Team": "Haas",
  "Alpine F1 Team": "Alpine"
};

export const countriesCorrections: { [key: string]: string } = {
  UK: "Great Britain",
  UAE: "Abu Dhabi",
  USA: "United States"
};
