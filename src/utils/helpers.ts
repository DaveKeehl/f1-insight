import { DriverStanding } from "./types";

export const getDriversWithTeam = (driverStandings: DriverStanding[]) => {
  return driverStandings.map((driverStandings) => {
    const team = driverStandings.Constructors[0]?.name || "";

    const corrections: { [key: string]: string } = {
      "Alpine F1 Team": "Alpine",
      "Haas F1 Team": "Haas",
    };

    return {
      ...driverStandings.Driver,
      team: corrections[team] || team,
    };
  });
};
