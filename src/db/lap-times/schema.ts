import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar, primaryKey } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";

export const lapTimes = mysqlTable(
  "lap_times",
  {
    /**
     * Foreign key link to races table
     */
    raceId: int("raceId")
      .notNull()
      .references(() => races.raceId),
    /**
     * Foreign key link to drivers table
     */
    driverId: int("driverId")
      .notNull()
      .references(() => drivers.driverId),
    /**
     * Lap number
     */
    lap: int("lap").notNull(),
    /**
     * Driver race position
     */
    position: int("position"),
    /**
     * Lap time e.g. "1:43.762"
     */
    time: varchar("time", { length: 255 }),
    /**
     * Lap time in milliseconds
     */
    milliseconds: int("milliseconds")
  },
  (table) => {
    return {
      pk: primaryKey(table.raceId, table.driverId, table.lap)
    };
  }
);

export type LapTimes = InferModel<typeof lapTimes>;
