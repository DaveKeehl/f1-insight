import { LineChart } from ".";

import { ConstructorStanding } from "@utils/types/standings";

interface ITeamLineChart {
  team: string;
  standings: ConstructorStanding[];
  races: { round: string; country: string }[];
}

export const TeamLineChart = ({ standings, races, team }: ITeamLineChart) => {
  return (
    <LineChart
      data={[
        {
          id: "Rank",
          data: standings.map((standing, idx) => ({
            x: `${races[idx]?.round} - ${races[idx]?.country}`,
            y: Number.parseInt(standing.position)
          }))
        }
      ]}
      team={team}
      minY={1}
      maxY={10}
      legendX="Race"
      legendY="Rank"
    />
  );
};
