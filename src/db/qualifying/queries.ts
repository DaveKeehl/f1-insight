import { and, eq } from "drizzle-orm";

import { db } from "@/db/config";
import { qualifying } from "@/db/qualifying/schema";
import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";
import { constructors } from "../constructors/schema";

export async function getQualifyingResults(round: number) {
  return db
    .select({
      position: qualifying.position,
      driverForename: drivers.forename,
      driverSurname: drivers.surname,
      constructorName: constructors.name,
      constructorRef: constructors.constructorRef,
      q1: qualifying.q1,
      q2: qualifying.q2,
      q3: qualifying.q3
    })
    .from(qualifying)
    .leftJoin(races, eq(qualifying.raceId, races.raceId))
    .leftJoin(drivers, eq(qualifying.driverId, drivers.driverId))
    .leftJoin(constructors, eq(qualifying.constructorId, constructors.constructorId))
    .where(and(eq(races.year, new Date().getFullYear()), eq(races.round, round)))
    .orderBy(qualifying.position);
}

export async function getDriverQualifyingResults(driverRef: string) {
  return db
    .select({
      round: races.round,
      raceName: races.name,
      position: qualifying.position
    })
    .from(qualifying)
    .leftJoin(drivers, eq(qualifying.driverId, drivers.driverId))
    .leftJoin(races, eq(qualifying.raceId, races.raceId))
    .where(and(eq(drivers.driverRef, driverRef), eq(races.year, new Date().getFullYear())))
    .orderBy(races.round);
}
