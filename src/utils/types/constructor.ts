import { z } from "zod";

export interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
}

export const ConstructorSchema = z.object({
  constructorId: z.string(),
  name: z.string(),
  nationality: z.string(),
  url: z.string()
});

export interface ITeamCareerInfo {
  fullName: string;
  base: string;
  nationality: string;
  teamPrincipal: string;
  technicalDirector: string;
  chassis: string;
  engine: string;
  tyres: string;
  firstEntry: string;
  lastEntry: string;
  racesEntered: number;
  constructorsChampionships: number;
  driversChampionships: number;
  raceVictories: number;
  podiums: number;
  points: number;
  polePositions: number;
  fastestLaps: number;
}
