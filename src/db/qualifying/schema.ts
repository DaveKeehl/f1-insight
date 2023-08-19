import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";
import { constructors } from "@/db/constructors/schema";

export const qualifying = mysqlTable("qualifying", {
  /**
   * Primary key
   */
  qualifyId: int("qualifyId").notNull().autoincrement().primaryKey(),
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
  number: int("number").notNull().default(0),
  /**
   * Qualifying position
   */
  position: int("position"),
  /**
   * Q1 lap time e.g. "1:21.374"
   */
  q1: varchar("q1", { length: 255 }),
  /**
   * Q2 lap time
   */
  q2: varchar("q2", { length: 255 }),
  /**
   * Q3 lap time
   */
  q3: varchar("q3", { length: 255 })
});

export type Qualifying = InferModel<typeof qualifying>;
