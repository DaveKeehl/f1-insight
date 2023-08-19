import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const seasons = mysqlTable("seasons", {
  year: int("year").notNull().default(0).primaryKey(),
  url: varchar("url", { length: 255 }).notNull().unique()
});

export type Seasons = InferModel<typeof seasons>;
