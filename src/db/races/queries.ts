import { and, eq } from "drizzle-orm";

import { db } from "@/db/config";
import { races } from "@/db/races/schema";
import { circuits } from "@/db/circuits/schema";

export async function getAllCurrentRaces() {
  return db
    .select({
      round: races.round,
      name: races.name,
      date: races.date,
      time: races.time,
      location: circuits.location,
      country: circuits.country
    })
    .from(races)
    .leftJoin(circuits, eq(races.circuitId, circuits.circuitId))
    .where(eq(races.year, new Date().getFullYear()))
    .orderBy(races.round);
}

export async function getRaceByRound(round: number) {
  return db
    .select({
      round: races.round,
      name: races.name,
      date: races.date,
      time: races.time,
      location: circuits.location,
      country: circuits.country
    })
    .from(races)
    .leftJoin(circuits, eq(races.circuitId, circuits.circuitId))
    .where(and(eq(races.year, new Date().getFullYear()), eq(races.round, round)));
}
