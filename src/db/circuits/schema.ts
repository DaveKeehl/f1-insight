import { InferModel } from "drizzle-orm";
import { float, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const circuits = mysqlTable("circuits", {
  circuitId: int("circuitId").notNull().autoincrement().primaryKey(),
  circuitRef: varchar("circuitRef", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }),
  country: varchar("country", { length: 255 }),
  lat: float("lat"),
  lng: float("lng"),
  alt: int("alt"),
  url: varchar("url", { length: 255 }).unique().notNull()
});

export type Circuit = InferModel<typeof circuits>;
