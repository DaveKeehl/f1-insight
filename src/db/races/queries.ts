import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { eq } from "drizzle-orm";

import { config } from "@/db/config";
import { races } from "@/db/races/schema";
import { circuits } from "@/db/circuits/schema";

export async function getAllCurrentRaces() {
  const connection = await mysql.createConnection(config);
  const db = drizzle(connection);

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
    .where(eq(races.year, 2023))
    .orderBy(races.round);
}
