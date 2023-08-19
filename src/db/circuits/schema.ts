import { InferModel } from "drizzle-orm";
import { float, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const circuits = mysqlTable("circuits", {
  /**
   * Primary key
   */
  circuitId: int("circuitId").notNull().autoincrement().primaryKey(),
  /**
   * Unique circuit identifier
   */
  circuitRef: varchar("circuitRef", { length: 255 }).notNull(),
  /**
   * Circuit name
   */
  name: varchar("name", { length: 255 }).notNull(),
  /**
   * Location name
   */
  location: varchar("location", { length: 255 }),
  /**
   * Country name
   */
  country: varchar("country", { length: 255 }),
  /**
   * Latitude
   */
  lat: float("lat"),
  /**
   * Longitude
   */
  lng: float("lng"),
  /**
   * Altitude (metres)
   */
  alt: int("alt"),
  /**
   * Circuit Wikipedia page
   */
  url: varchar("url", { length: 255 }).unique().notNull()
});

export type Circuit = InferModel<typeof circuits>;
