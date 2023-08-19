import { InferModel } from "drizzle-orm";
import { float, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";
import { constructors } from "@/db/constructors/schema";
import { status } from "@/db/status/schema";

export const results = mysqlTable("results", {
  resultId: int("resultId").notNull().autoincrement().primaryKey(),
  raceId: int("raceId")
    .notNull()
    .default(0)
    .references(() => races.raceId),
  driverId: int("driverId")
    .notNull()
    .default(0)
    .references(() => drivers.driverId),
  constructorId: int("constructorId")
    .notNull()
    .default(0)
    .references(() => constructors.constructorId),
  number: int("number"),
  grid: int("grid").notNull().default(0),
  position: int("position"),
  positionText: varchar("positionText", { length: 255 }).notNull(),
  positionOrder: int("positionOrder").notNull().default(0),
  points: float("points").notNull().default(0),
  laps: int("laps").notNull().default(0),
  time: varchar("time", { length: 255 }),
  milliseconds: int("milliseconds"),
  fastestLap: int("fastestLap"),
  rank: int("rank").default(0),
  fastestLapTime: varchar("fastestLapTime", { length: 255 }),
  fastestLapSpeed: varchar("fastestLapSpeed", { length: 255 }),
  statusId: int("statusId")
    .notNull()
    .default(0)
    .references(() => status.statusId)
});

export type Results = InferModel<typeof results>;
