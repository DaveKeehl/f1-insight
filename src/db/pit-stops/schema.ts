import { InferModel } from "drizzle-orm";
import { int, mysqlTable, primaryKey, time, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";

export const pitStops = mysqlTable(
  "pit_stops",
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
     * Stop number
     */
    stop: int("stop").notNull(),
    /**
     * Lap number
     */
    lap: int("lap").notNull(),
    /**
     * Time of stop e.g. "13:52:25"
     */
    time: time("time").notNull(),
    /**
     * Duration of stop e.g. "21.783"
     */
    duration: varchar("duration", { length: 255 }),
    /**
     * Duration of stop in milliseconds
     */
    milliseconds: int("milliseconds")
  },
  (table) => {
    return {
      pk: primaryKey(table.raceId, table.driverId, table.stop)
    };
  }
);

export type PitStops = InferModel<typeof pitStops>;
