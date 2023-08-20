import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { eq } from "drizzle-orm";

import { config } from "@/db/config";
import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";
import { results } from "@/db/results/schema";

export async function getAllCurrentDrivers() {
  const connection = await mysql.createConnection(config);
  const db = drizzle(connection);

  return db
    .selectDistinct({
      driverId: drivers.driverId,
      forename: drivers.forename,
      surname: drivers.surname,
      number: drivers.number
    })
    .from(drivers)
    .leftJoin(results, eq(drivers.driverId, results.driverId))
    .leftJoin(races, eq(results.raceId, races.raceId))
    .where(eq(races.year, 2023));
}
