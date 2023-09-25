import { and, eq } from "drizzle-orm";

import { db } from "@/db/config";
import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";
import { results } from "@/db/results/schema";
import { constructors } from "@/db/constructors/schema";

export async function getAllCurrentDrivers() {
  return db
    .selectDistinct({
      driverId: drivers.driverId,
      driverRef: drivers.driverRef,
      forename: drivers.forename,
      surname: drivers.surname,
      number: drivers.number
    })
    .from(drivers)
    .leftJoin(results, eq(drivers.driverId, results.driverId))
    .leftJoin(races, eq(results.raceId, races.raceId))
    .where(eq(races.year, new Date().getFullYear()));
}

export async function getDriverFullName(driverRef: string) {
  return db
    .select({
      forename: drivers.forename,
      surname: drivers.surname
    })
    .from(drivers)
    .where(eq(drivers.driverRef, driverRef));
}

export async function getDriver(driverRef: string) {
  return db.select().from(drivers).where(eq(drivers.driverRef, driverRef));
}

export async function getDriverWithConstructor(driverRef: string) {
  return db
    .selectDistinct({
      number: drivers.number,
      forename: drivers.forename,
      surname: drivers.surname,
      nationality: drivers.nationality,
      constructorName: constructors.name
    })
    .from(drivers)
    .leftJoin(results, eq(drivers.driverId, results.driverId))
    .leftJoin(races, eq(results.raceId, races.raceId))
    .leftJoin(constructors, eq(results.constructorId, constructors.constructorId))
    .where(and(eq(races.year, new Date().getFullYear()), eq(drivers.driverRef, driverRef)));
}
