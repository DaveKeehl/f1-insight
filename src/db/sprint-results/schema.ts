import { InferModel } from "drizzle-orm";
import { float, index, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";
import { constructors } from "@/db/constructors/schema";
import { status } from "@/db/status/schema";

export const sprintResults = mysqlTable(
  "sprint-results",
  {
    /**
     * Primary key
     */
    sprintResultId: int("sprintResultId").notNull().autoincrement().primaryKey(),
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
     * Foreign key link to constructors table
     */
    constructorId: int("constructorId")
      .notNull()
      .default(0)
      .references(() => constructors.constructorId),
    /**
     * Driver number
     */
    number: int("number"),
    /**
     * Starting grid position
     */
    grid: int("grid").notNull().default(0),
    /**
     * Official classification, if applicable
     */
    position: int("position"),
    /**
     * Driver position string e.g. "1" or "R"
     */
    positionText: varchar("positionText", { length: 255 }).notNull().default(""),
    /**
     * Driver position for ordering purposes
     */
    positionOrder: int("positionOrder").notNull().default(0),
    /**
     * Driver points for race
     */
    points: float("points").notNull().default(0),
    /**
     * Number of completed laps
     */
    laps: int("laps").notNull().default(0),
    /**
     * Finishing time or gap
     */
    time: varchar("time", { length: 255 }),
    /**
     * Finishing time in milliseconds
     */
    milliseconds: int("milliseconds"),
    /**
     * Lap number of fastest lap
     */
    fastestLap: int("fastestLap"),
    /**
     * Fastest lap time e.g. "1:27.453"
     */
    fastestLapTime: varchar("fastestLapTime", { length: 255 }),
    /**
     * Foreign key link to status table
     */
    statusId: int("statusId")
      .notNull()
      .default(0)
      .references(() => status.statusId)
  },
  (table) => {
    return {
      raceId: index("raceId").on(table.raceId)
    };
  }
);

export type SprintResults = InferModel<typeof sprintResults>;
