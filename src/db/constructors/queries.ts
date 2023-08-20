import { eq } from "drizzle-orm";

import { db } from "@/db/config";
import { races } from "@/db/races/schema";
import { results } from "@/db/results/schema";
import { constructors } from "@/db/constructors/schema";

export async function getAllCurrentConstructors() {
  return db
    .selectDistinct({
      constructorId: constructors.constructorId,
      constructorRef: constructors.constructorRef,
      name: constructors.name
    })
    .from(constructors)
    .leftJoin(results, eq(constructors.constructorId, results.constructorId))
    .leftJoin(races, eq(results.raceId, races.raceId))
    .where(eq(races.year, new Date().getFullYear()));
}
