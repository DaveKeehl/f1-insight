import { InferModel } from "drizzle-orm";
import { int, mysqlTable, primaryKey, time, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";

export const pitStops = mysqlTable(
  "pit_stops",
  {
    raceId: int("raceId")
      .notNull()
      .references(() => races.raceId),
    driverId: int("driverId")
      .notNull()
      .references(() => drivers.driverId),
    stop: int("stop").notNull(),
    lap: int("lap").notNull(),
    time: time("time").notNull(),
    duration: varchar("duration", { length: 255 }),
    milliseconds: int("milliseconds")
  },
  (table) => {
    return {
      pk: primaryKey(table.raceId, table.driverId, table.stop)
    };
  }
);

export type PitStops = InferModel<typeof pitStops>;
