import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const constructors = mysqlTable("constructors", {
  /**
   * Primary key
   */
  constructorId: int("constructorId").notNull().autoincrement().primaryKey(),
  /**
   * Unique constructor identifier
   */
  constructorRef: varchar("constructorRef", { length: 255 }).notNull(),
  /**
   * Constructor name
   */
  name: varchar("name", { length: 255 }).notNull().unique(),
  /**
   * Constructor nationality
   */
  nationality: varchar("nationality", { length: 255 }),
  /**
   * Constructor Wikipedia page
   */
  url: varchar("url", { length: 255 }).notNull()
});

export type Constructors = InferModel<typeof constructors>;
