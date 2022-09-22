import { useState } from "react";

import {
  DriverQualifyingResult,
  DriverRaceResult
} from "../../utils/types/race";
import { Results } from "../Results";
import { QualifyingResultsTable } from "../Table/QualifyingResultsTable";
import { RaceResultsTable } from "../Table/RaceResultsTable";

interface IRace {
  circuitId: string;
  country: string;
  date: string;
  results: {
    race: DriverRaceResult[];
    qualifying: DriverQualifyingResult[];
  };
}

export const Race = ({ circuitId, country, date, results }: IRace) => {
  const [mode, setMode] = useState<"race" | "qualifying">("race");
  const [view, setView] = useState<"table" | "chart">("table");

  const clean = {
    circuitId: circuitId.replace(/_/g, " ")
  };

  const table =
    mode === "race" ? (
      <RaceResultsTable data={results.race} />
    ) : (
      <QualifyingResultsTable data={results.qualifying} />
    );

  return (
    <Results
      title={country}
      subtitle={`@${clean.circuitId}   //   ${date}`}
      buttons={[
        [
          {
            text: "qualifying",
            selected: mode === "qualifying",
            onClick: () => setMode("qualifying")
          },
          {
            text: "race",
            selected: mode === "race",
            onClick: () => setMode("race")
          }
        ],
        [
          {
            text: "table view",
            selected: view === "table",
            onClick: () => setView("table")
          },
          {
            text: "chart view",
            selected: view === "chart",
            onClick: () => setView("chart")
          }
        ]
      ]}
    >
      {table}
    </Results>
  );
};
