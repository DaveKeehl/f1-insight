import { InferModel } from "drizzle-orm";
import { float, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { constructors } from "@/db/constructors/schema";
import { races } from "@/db/races/schema";

export const constructorStandings = mysqlTable("constructor_standings", {
  /**
   * Primary key
   */
  constructorStandingsId: int("constructorStandingsId").notNull().autoincrement().primaryKey(),
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
   * Constructor points for season
   */
  points: float("points").notNull().default(0),
  /**
   * Constructor standings position (integer)
   */
  position: int("position"),
  /**
   * Constructor standings position (string)
   */
  positionText: varchar("positionText", { length: 255 }),
  /**
   * Season win count
   */
  wins: int("wins").notNull().default(0)
});

export type ConstructorStandings = InferModel<typeof constructorStandings>;
