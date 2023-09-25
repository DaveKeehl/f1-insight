import { InferModel } from "drizzle-orm";
import { float, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { constructors } from "@/db/constructors/schema";

export const constructorResults = mysqlTable("constructor_results", {
  /**
   * Primary key
   */
  constructorResultsId: int("constructorResultsId").notNull().autoincrement().primaryKey(),
  /**
   * Foreign key link to races table
   */
  raceId: int("raceId")
    .notNull()
    .default(0)
    .references(() => races.raceId),
  /**
   * Foreign key link to constructors table
   */
  constructorId: int("constructorId")
    .notNull()
    .default(0)
    .references(() => constructors.constructorId),
  /**
   * Constructor points for race
   */
  points: float("points"),
  /**
   * "D" for disqualified (or null)
   */
  status: varchar("status", { length: 255 })
});

export type ConstructorResults = InferModel<typeof constructorResults>;
