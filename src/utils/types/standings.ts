import { z } from "zod";

import { Constructor, ConstructorSchema } from "./constructor";
import { DriverSchema, IDriver } from "./driver";

interface Standing {
  position: string;
  positionText: string;
  points: string;
  wins: string;
}

const StandingSchema = z.object({
  position: z.string(),
  positionText: z.string(),
  points: z.string(),
  wins: z.string()
});

export interface DriverStanding extends Standing {
  Driver: IDriver;
  Constructors: Constructor[];
}

export const DriverStandingSchema = StandingSchema.extend({
  Driver: DriverSchema,
  Constructors: ConstructorSchema.array()
});

export interface ConstructorStanding extends Standing {
  Constructor: Constructor;
}

export const ConstructorStandingSchema = StandingSchema.extend({
  Constructor: ConstructorSchema
});
