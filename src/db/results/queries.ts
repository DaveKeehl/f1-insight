import { and, eq } from "drizzle-orm";

import { db } from "@/db/config";
import { constructors } from "@/db/constructors/schema";
import { drivers } from "@/db/drivers/schema";
import { races } from "@/db/races/schema";
import { results } from "@/db/results/schema";
import { status } from "@/db/status/schema";

export async function getRaceResults(round: number) {
  return db
    .select({
      positionOrder: results.positionOrder,
      driverForename: drivers.forename,
      driverSurname: drivers.surname,
      constructorName: constructors.name,
      constructorRef: constructors.constructorRef,
      time: results.time,
      status: status
    })
    .from(results)
    .leftJoin(races, eq(results.raceId, races.raceId))
    .leftJoin(drivers, eq(results.driverId, drivers.driverId))
    .leftJoin(constructors, eq(results.constructorId, constructors.constructorId))
    .leftJoin(status, eq(results.statusId, status.statusId))
    .where(and(eq(races.year, new Date().getFullYear()), eq(races.round, round)))
    .orderBy(results.positionOrder);
}

export async function getDriverRaceResults(driverRef: string) {
  return db
    .select({
      round: races.round,
      name: races.name,
      positionOrder: results.positionOrder
    })
    .from(results)
    .leftJoin(drivers, eq(results.driverId, drivers.driverId))
    .leftJoin(races, eq(results.raceId, races.raceId))
    .where(and(eq(drivers.driverRef, driverRef), eq(races.year, new Date().getFullYear())))
    .orderBy(races.round);
}
