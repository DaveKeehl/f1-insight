import { LineChart } from ".";

import { QualifyingResult, RaceResult } from "@utils/types/race";
import { IDriverWithTeam } from "@utils/types/driver";

interface IDriverLineChart {
  races: { round: string; country: string }[];
  raceResults: RaceResult[];
  qualifyingResults: QualifyingResult[];
  driverWithTeam: IDriverWithTeam;
}

export const DriverLineChart = ({
  races,
  raceResults,
  qualifyingResults,
  driverWithTeam
}: IDriverLineChart) => {
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
              y:
                Number.parseInt(
                  correspondingRaceResult?.Results[0]?.position as string
                ) || null
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
                  correspondingQualifyingResult?.QualifyingResults[0]
                    ?.position as string
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
};
