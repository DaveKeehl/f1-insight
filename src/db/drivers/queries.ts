import { eq } from "drizzle-orm";

import { db } from "@/db/config";
import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";
import { results } from "@/db/results/schema";

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

export async function getDriver(driverRef: string) {
  return db.select().from(drivers).where(eq(drivers.driverRef, driverRef));
}
