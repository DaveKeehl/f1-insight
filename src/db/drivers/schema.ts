import { InferModel } from "drizzle-orm";
import { date, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const drivers = mysqlTable("drivers", {
  /**
   * Primary key
   */
  driverId: int("driverId").notNull().autoincrement().primaryKey(),
  /**
   * Unique driver identifier
   */
  driverRef: varchar("driverRef", { length: 255 }).notNull().default(""),
  /**
   * Permanent driver number
   */
  number: int("number"),
  /**
   * Driver code e.g. "ALO"
   */
  code: varchar("code", { length: 3 }),
  /**
   * Driver forename
   */
  forename: varchar("forename", { length: 255 }).notNull().default(""),
  /**
   * Driver surname
   */
  surname: varchar("surname", { length: 255 }).notNull().default(""),
  /**
   * Driver date of birth
   */
  dob: date("dob"),
  /**
   * Driver nationality
   */
  nationality: varchar("nationality", { length: 255 }),
  /**
   * Driver Wikipedia page
   */
  url: varchar("url", { length: 255 }).notNull().unique()
});

export type Drivers = InferModel<typeof drivers>;
