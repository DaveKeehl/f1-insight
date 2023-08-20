import { db } from "@/db/config";

import { circuits, type Circuit } from "@/db/circuits/schema";

export async function getCircuits(): Promise<Circuit[]> {
  return db.select().from(circuits);
}
