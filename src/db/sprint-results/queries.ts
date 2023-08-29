import { and, eq } from "drizzle-orm";

import { db } from "@/db/config";
import { sprintResults } from "@/db/sprint-results/schema";
import { races } from "@/db/races/schema";
import { drivers } from "../drivers/schema";
import { constructors } from "../constructors/schema";
import { status } from "../status/schema";

export async function getSprintResults(round: number) {
  return db
    .select()
    .from(sprintResults)
    .leftJoin(races, eq(sprintResults.raceId, races.raceId))
    .leftJoin(drivers, eq(sprintResults.driverId, drivers.driverId))
    .leftJoin(constructors, eq(sprintResults.constructorId, constructors.constructorId))
    .leftJoin(status, eq(sprintResults.statusId, status.statusId))
    .where(and(eq(races.year, new Date().getFullYear()), eq(races.round, round)))
    .orderBy(sprintResults.positionOrder);
}
