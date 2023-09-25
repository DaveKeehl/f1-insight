import { InferModel } from "drizzle-orm";
import { float, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";

export const driverStandings = mysqlTable("driverStandings", {
  /**
   * Primary key
   */
  driverStandingsId: int("driverStandingsId").notNull().autoincrement().primaryKey(),
  /**
   * Foreign key link to races table
   */
  raceId: int("raceId")
    .notNull()
    .default(0)
    .references(() => races.raceId),
  /**
   * Foreign key link to drivers table
   */
  driverId: int("driverId")
    .notNull()
    .default(0)
    .references(() => drivers.driverId),
  /**
   * Driver points for season
   */
  points: float("points").notNull().default(0),
  /**
   * Driver standings position (integer)
   */
  position: int("position"),
  /**
   * Driver standings position (string)
   */
  positionText: varchar("positionText", { length: 255 }),
  /**
   * Season win count
   */
  wins: int("wins").notNull().default(0)
});

export type DriverStandings = InferModel<typeof driverStandings>;
