import { useState } from "react";
import {
  ConstructorStanding,
  DriverStanding
} from "../../utils/types/standings";
import { Results } from "../Results";
import { ConstructorStandingsTable } from "../Table/ConstructorStandingsTable";
import { DriverStandingsTable } from "../Table/DriverStandingsTable";

interface IStandings {
  drivers: DriverStanding[];
  constructors: ConstructorStanding[];
}

export const Standings = ({ drivers, constructors }: IStandings) => {
  const [mode, setMode] = useState<"drivers" | "constructors">("drivers");

  const table =
    mode === "drivers" ? (
      <DriverStandingsTable data={drivers} />
    ) : (
      <ConstructorStandingsTable data={constructors} />
    );

  return (
    <Results
      title="Standings"
      buttons={[
        [
          {
            text: "drivers",
            selected: mode === "drivers",
            onClick: () => setMode("drivers")
          },
          {
            text: "constructors",
            selected: mode === "constructors",
            onClick: () => setMode("constructors")
          }
        ]
      ]}
    >
      {table}
    </Results>
  );
};
