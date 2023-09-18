import { and, eq, sql } from "drizzle-orm";

import { db } from "@/db/config";
import { races } from "@/db/races/schema";
import { results } from "@/db/results/schema";
import { constructors } from "@/db/constructors/schema";
import { constructorStandings } from "@/db/constructor-standings/schema";

export async function getConstructorStandings() {
  return db
    .select({
      position: constructorStandings.position,
      constructorName: constructors.name,
      points: constructorStandings.points,
      wins: constructorStandings.wins,
      round: races.round
    })
    .from(constructorStandings)
    .leftJoin(races, eq(constructorStandings.raceId, races.raceId))
    .leftJoin(constructors, eq(constructorStandings.constructorId, constructors.constructorId))
    .where(
      and(
        eq(races.year, new Date().getFullYear()),
        eq(
          races.round,
          db
            .select({
              maxRound: sql<number>`MAX(${races.round})`
            })
            .from(races)
            .innerJoin(results, eq(races.raceId, results.raceId))
            .where(eq(races.year, new Date().getFullYear()))
        )
      )
    )
    .orderBy(constructorStandings.position);
}
