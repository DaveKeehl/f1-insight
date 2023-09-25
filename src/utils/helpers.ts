import { sub } from "date-fns";

import { teamsCorrections } from "./mappings";
import { DriverWithTeamSchema, IDriver } from "./types/driver";
import { DriverStanding } from "./types/standings";

export const getDriversWithTeam = (driverStandings: DriverStanding[]) => {
  return driverStandings.map((driverStandings) => {
    const team = driverStandings.Constructors[0]?.name || "";

    return DriverWithTeamSchema.parse({
      ...driverStandings.Driver,
      team: teamsCorrections[team] || team
    });
  });
};

export const getTeamDrivers = (
  driverStandings: DriverStanding[],
  drivers: IDriver[],
  team: string
) => {
  return getDriversWithTeam(driverStandings)
    .filter((driver) => driver.team === team)
    .map((driver) => {
      return drivers.find((d) => d.driverId === driver.driverId) as IDriver;
    });
};

export const getPrettyDate = (date: string) => {
  const [year, month, day] = date.split("-").map((el: string) => +el);

  if (year === undefined || month === undefined) {
    return "";
  }

  const endDate = new Date(year, month - 1, day);
  const endMonth = endDate.toLocaleString("default", {
    month: "short"
  });

  const startDate = sub(endDate, { days: 2 });
  const startMonth = startDate.toLocaleDateString("default", {
    month: "short"
  });

  return startMonth === endMonth
    ? `${startDate.getDate()} - ${endDate.getDate()} ${endMonth}`
    : `${startDate.getDate()} ${startMonth} - ${endDate.getDate()} ${endMonth}`;
};

export const removeRef = (text?: string) => {
  if (text) return text.replace(/\[\w*\]/g, "");
  return "";
};
