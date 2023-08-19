import { InferModel } from "drizzle-orm";
import { float, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { constructors } from "@/db/constructors/schema";

export const constructorResults = mysqlTable("constructor_results", {
  constructorResultsId: int("constructorResultsId").notNull().autoincrement().primaryKey(),
  raceId: int("raceId")
    .notNull()
    .default(0)
    .references(() => races.raceId),
  constructorId: int("constructorId")
    .notNull()
    .default(0)
    .references(() => constructors.constructorId),
  points: float("points"),
  status: varchar("status", { length: 255 })
});

export type ConstructorResults = InferModel<typeof constructorResults>;
