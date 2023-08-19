import { InferModel } from "drizzle-orm";
import { float, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";

export const driverStandings = mysqlTable("driver_standings", {
  driverStandingsId: int("driverStandingsId").notNull().autoincrement().primaryKey(),
  raceId: int("raceId")
    .notNull()
    .default(0)
    .references(() => races.raceId),
  driverId: int("driverId")
    .notNull()
    .default(0)
    .references(() => drivers.driverId),
  points: float("points").notNull().default(0),
  position: int("position"),
  positionText: varchar("positionText", { length: 255 }),
  wins: int("wins").notNull().default(0)
});

export type DriverStandings = InferModel<typeof driverStandings>;
