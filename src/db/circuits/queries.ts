import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { config } from "@/db/config";

import { circuits, type Circuit } from "@/db/circuits/schema";

export async function getCircuits(): Promise<Circuit[]> {
  const connection = await mysql.createConnection(config);
  const db = drizzle(connection);

  return db.select().from(circuits);
}
