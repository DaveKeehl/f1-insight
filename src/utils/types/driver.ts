import { z } from "zod";

export interface IDriver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
}

export const DriverSchema = z.object({
  code: z.string(),
  dateOfBirth: z.string(),
  driverId: z.string(),
  familyName: z.string(),
  givenName: z.string(),
  nationality: z.string(),
  permanentNumber: z.string(),
  url: z.string()
});

export interface IDriverWithTeam extends IDriver {
  team: string;
}

export const DriverWithTeamSchema = DriverSchema.extend({
  team: z.string()
});
