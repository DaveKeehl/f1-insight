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
