import { z } from "zod";

import { getDriversWithTeam } from "@utils/helpers";
import {
  getConstructorStandings,
  getDriverStandings,
  getDrivers
} from "@utils/services";

import { createRouter } from "./context";

export const driversRouter = createRouter()
  .query("get-drivers", {
    output: z
      .object({
        driverId: z.string(),
        permanentNumber: z.string(),
        code: z.string(),
        url: z.string(),
        givenName: z.string(),
        familyName: z.string(),
        dateOfBirth: z.string(),
        nationality: z.string()
      })
      .array(),
    async resolve() {
      return getDrivers();
    }
  })
  .query("get-standings", {
    async resolve() {
      return getDriverStandings();
    }
  })
  .query("get-drivers-with-team", {
    async resolve() {
      const driverStandings = await getDriverStandings();
      return getDriversWithTeam(driverStandings);
    }
  })
  .query("standings", {
    async resolve() {
      return getDriverStandings();
    }
  });

export const constructorsRouter = createRouter().query("standings", {
  async resolve() {
    return getConstructorStandings();
  }
});
