import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar, primaryKey } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";

export const lapTimes = mysqlTable(
  "lap_times",
  {
    raceId: int("raceId")
      .notNull()
      .references(() => races.raceId),
    driverId: int("driverId")
      .notNull()
      .references(() => drivers.driverId),
    lap: int("lap").notNull(),
    position: int("position"),
    time: varchar("time", { length: 255 }),
    milliseconds: int("milliseconds")
  },
  (table) => {
    return {
      pk: primaryKey(table.raceId, table.driverId, table.lap)
    };
  }
);

export type LapTimes = InferModel<typeof lapTimes>;
