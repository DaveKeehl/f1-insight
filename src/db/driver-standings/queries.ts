import { and, eq, sql } from "drizzle-orm";

import { db } from "@/db/config";
import { races } from "@/db/races/schema";
import { results } from "@/db/results/schema";
import { constructors } from "@/db/constructors/schema";
import { driverStandings } from "@/db/driver-standings/schema";
import { drivers } from "@/db/drivers/schema";

export async function getDriverStandings() {
  return db
    .select({
      position: driverStandings.position,
      forename: drivers.forename,
      surname: drivers.surname,
      driverRef: drivers.driverRef,
      constructorName: constructors.name,
      points: driverStandings.points,
      wins: driverStandings.wins,
      round: races.round
    })
    .from(driverStandings)
    .leftJoin(races, eq(driverStandings.raceId, races.raceId))
    .leftJoin(drivers, eq(driverStandings.driverId, drivers.driverId))
    .leftJoin(
      results,
      and(eq(results.raceId, races.raceId), eq(results.driverId, drivers.driverId))
    )
    .leftJoin(constructors, eq(results.constructorId, constructors.constructorId))
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
    .orderBy(driverStandings.position);
}
