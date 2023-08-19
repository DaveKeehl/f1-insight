import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const constructors = mysqlTable("constructors", {
  constructorId: int("constructorId").notNull().autoincrement().primaryKey(),
  constructorRef: varchar("constructorRef", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull().unique(),
  nationality: varchar("nationality", { length: 255 }),
  url: varchar("url", { length: 255 }).notNull()
});

export type Constructors = InferModel<typeof constructors>;
