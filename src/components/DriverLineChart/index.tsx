import LineChart from "@/components/LineChart";

import { IDriverWithTeam } from "@/utils/types/driver";
import { QualifyingResult, RaceResult } from "@/utils/types/race";

interface IDriverLineChart {
  races: { round: string; country: string }[];
  raceResults: RaceResult[];
  qualifyingResults: QualifyingResult[];
  driverWithTeam: IDriverWithTeam;
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
            const correspondingRaceResult = raceResults.find(
              (raceResult) => raceResult.round === race.round
            );
            return {
              x: `${race.round} - ${race.country}`,
              y: Number.parseInt(correspondingRaceResult?.Results[0]?.position as string) || null
            };
          })
        },
        {
          id: "Qualifying",
          data: races.map((race) => {
            const correspondingQualifyingResult = qualifyingResults.find(
              (raceResult) => raceResult.round === race.round
            );
            return {
              x: `${race.round} - ${race.country}`,
              y:
                Number.parseInt(
                  correspondingQualifyingResult?.QualifyingResults[0]?.position as string
                ) || null
            };
          })
        }
      ]}
      team={driverWithTeam.team}
      minY={1}
      maxY={20}
      legendX="Race"
      legendY="Position"
    />
  );
}
