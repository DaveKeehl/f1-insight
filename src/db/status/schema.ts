import { InferModel } from "drizzle-orm";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const status = mysqlTable("status", {
  /**
   * Primary key
   */
  statusId: int("statusId").notNull().autoincrement().primaryKey(),
  /**
   * Finishing status e.g. "Retired"
   */
  status: varchar("status", { length: 255 }).notNull()
});

export type Status = InferModel<typeof status>;
