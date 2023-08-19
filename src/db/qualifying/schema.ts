import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { races } from "@/db/races/schema";
import { drivers } from "@/db/drivers/schema";
import { constructors } from "@/db/constructors/schema";

export const qualifying = mysqlTable("qualifying", {
  qualifyId: int("qualifyId").notNull().autoincrement().primaryKey(),
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
  number: int("number").notNull().default(0),
  position: int("position"),
  q1: varchar("q1", { length: 255 }),
  q2: varchar("q2", { length: 255 }),
  q3: varchar("q3", { length: 255 })
});

export type Qualifying = InferModel<typeof qualifying>;
