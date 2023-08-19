import { constructors } from "@/db/constructors/schema";
import { races } from "@/db/races/schema";
import { InferModel } from "drizzle-orm";
import { float, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const constructorStandings = mysqlTable("constructor_standings", {
  constructorStandingsId: int("constructorStandingsId").notNull().autoincrement().primaryKey(),
  raceId: int("raceId")
    .notNull()
    .default(0)
    .references(() => races.raceId),
  constructorId: int("constructorId")
    .notNull()
    .default(0)
    .references(() => constructors.constructorId),
  points: float("points").notNull().default(0),
  position: int("position"),
  positionText: varchar("positionText", { length: 255 }),
  wins: int("wins").notNull().default(0)
});

export type ConstructorStandings = InferModel<typeof constructorStandings>;
