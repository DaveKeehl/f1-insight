import { createRouter } from "./context";
import { z } from "zod";
import { getDriversWithTeam } from "@utils/helpers";
import {
  getConstructorStandings,
  getDrivers,
  getDriverStandings
} from "@utils/services";
import { DriverSchema } from "@utils/types/driver";
import { ConstructorSchema } from "@utils/types/constructor";
import { DriverStandingSchema } from "@utils/types/standings";

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
