import { InferModel } from "drizzle-orm";
import { date, float, int, mysqlTable, time, varchar } from "drizzle-orm/mysql-core";

export const drivers = mysqlTable("drivers", {
  driverId: int("driverId").notNull().autoincrement().primaryKey(),
  driverRef: varchar("driverRef", { length: 255 }).notNull(),
  number: int("number"),
  code: varchar("code", { length: 3 }),
  forename: varchar("forename", { length: 255 }).notNull(),
  surname: varchar("surname", { length: 255 }).notNull(),
  dob: date("dob"),
  nationality: varchar("nationality", { length: 255 }),
  url: varchar("url", { length: 255 }).notNull().unique()
});

export type Drivers = InferModel<typeof drivers>;
