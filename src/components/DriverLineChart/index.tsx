import LineChart from "@/components/LineChart";

import { getDriverWithConstructor } from "@/db/drivers/queries";
import { getDriverQualifyingResults } from "@/db/qualifying/queries";
import { getDriverRaceResults } from "@/db/results/queries";

interface IDriverLineChart {
  races: { round: number; country: string }[];
  raceResults: Awaited<ReturnType<typeof getDriverRaceResults>>;
  qualifyingResults: Awaited<ReturnType<typeof getDriverQualifyingResults>>;
  driverWithTeam: Awaited<ReturnType<typeof getDriverWithConstructor>>[number];
}

export default function DriverLineChart({
  races,
  raceResults,
  qualifyingResults,
  driverWithTeam
}: IDriverLineChart) {
  return (
    <LineChart
      data={[
        {
          id: "Race",
          data: races.map((race) => {
            const result = raceResults.find((res) => res.round === race.round);

            return {
              x: `${race.round} - ${race.country}`,
              y: result?.positionOrder ?? null
            };
          })
        },
        {
          id: "Qualifying",
          data: races.map((race) => {
            const result = qualifyingResults.find((res) => res.round === race.round);

            return {
              x: `${race.round} - ${race.country}`,
              y: result?.position ?? null
            };
          })
        }
      ]}
      team={driverWithTeam.constructorName ?? ""}
      minY={1}
      maxY={20}
      legendX="Race"
      legendY="Position"
    />
  );
}
