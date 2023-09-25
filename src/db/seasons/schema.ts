import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const seasons = mysqlTable("seasons", {
  /**
   * Primary key e.g. 1950
   */
  year: int("year").notNull().default(0).primaryKey(),
  /**
   * Season Wikipedia page
   */
  url: varchar("url", { length: 255 }).notNull().default("").unique()
});

export type Seasons = InferModel<typeof seasons>;
