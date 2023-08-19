import { InferModel } from "drizzle-orm";
import { date, int, mysqlTable, time, varchar } from "drizzle-orm/mysql-core";

import { circuits } from "@/db/circuits/schema";
import { seasons } from "@/db/seasons/schema";

export const races = mysqlTable("races", {
  raceId: int("raceId").notNull().autoincrement().primaryKey(),
  year: int("year")
    .notNull()
    .default(0)
    .references(() => seasons.year),
  round: int("round").notNull().default(0),
  circuitId: int("circuitId")
    .notNull()
    .default(0)
    .references(() => circuits.circuitId),
  name: varchar("name", { length: 255 }).notNull(),
  date: date("date").notNull().default(new Date("0000-00-00")),
  time: time("time"),
  url: varchar("url", { length: 255 }).unique(),
  fp1_date: date("fp1_date"),
  fp1_time: time("fp1_time"),
  fp2_date: date("fp2_date"),
  fp2_time: time("fp2_time"),
  fp3_date: date("fp3_date"),
  fp3_time: time("fp3_time"),
  quali_date: date("quali_date"),
  quali_time: time("quali_time"),
  sprint_date: date("sprint_date"),
  sprint_time: time("sprint_time")
});

export type Races = InferModel<typeof races>;
