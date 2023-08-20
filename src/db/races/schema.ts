import { InferModel } from "drizzle-orm";
import { date, int, mysqlTable, time, varchar } from "drizzle-orm/mysql-core";

import { circuits } from "@/db/circuits/schema";
import { seasons } from "@/db/seasons/schema";

export const races = mysqlTable("races", {
  /**
   * Primary key
   */
  raceId: int("raceId").notNull().autoincrement().primaryKey(),
  /**
   * Foreign key link to seasons table
   */
  year: int("year")
    .notNull()
    .default(0)
    .references(() => seasons.year),
  /**
   * Round number
   */
  round: int("round").notNull().default(0),
  /**
   * Foreign key link to circuits table
   */
  circuitId: int("circuitId")
    .notNull()
    .default(0)
    .references(() => circuits.circuitId),
  /**
   * Race name
   */
  name: varchar("name", { length: 255 }).notNull().default(""),
  /**
   * Race date e.g. "1950-05-13"
   */
  date: date("date").notNull().default(new Date("0000-00-00")),
  /**
   * Race start time e.g."13:00:00"
   */
  time: time("time"),
  /**
   * Race Wikipedia page
   */
  url: varchar("url", { length: 255 }).unique(),
  /**
   * FP1 date
   */
  fp1_date: date("fp1_date"),
  /**
   * FP1 start time
   */
  fp1_time: time("fp1_time"),
  /**
   * FP2 date
   */
  fp2_date: date("fp2_date"),
  /**
   * FP2 start time
   */
  fp2_time: time("fp2_time"),
  /**
   * FP3 date
   */
  fp3_date: date("fp3_date"),
  /**
   * FP3 start time
   */
  fp3_time: time("fp3_time"),
  /**
   * Qualifying date
   */
  quali_date: date("quali_date"),
  /**
   * Qualifying start time
   */
  quali_time: time("quali_time"),
  /**
   * Sprint date
   */
  sprint_date: date("sprint_date"),
  /**
   * Sprint start time
   */
  sprint_time: time("sprint_time")
});

export type Races = InferModel<typeof races>;
