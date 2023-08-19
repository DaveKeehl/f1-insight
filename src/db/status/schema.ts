import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const status = mysqlTable("status", {
  statusId: int("statusId").notNull().autoincrement().primaryKey(),
  status: varchar("status", { length: 255 }).notNull()
});

export type Status = InferModel<typeof status>;
