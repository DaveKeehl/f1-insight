import { useState } from "react";

import { DriverRaceResult } from "../../utils/types/race";
import { Results } from "../Results";

interface IRace {
  circuitId: string;
  country: string;
  date: string;
  results: DriverRaceResult[];
}

export const Race = ({ circuitId, country, date, results }: IRace) => {
  const [mode, setMode] = useState<"race" | "qualifying">("race");
  const [view, setView] = useState<"table" | "chart">("table");

  const clean = {
    circuitId: circuitId.replace(/_/g, " ")
  };

  return (
    <Results
      title={country}
      subtitle={`@${clean.circuitId}   //   ${date}`}
      buttons={[
        [
          {
            text: "Qualifying",
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
            text: "Table view",
            selected: view === "table",
            onClick: () => setView("table")
          },
          {
            text: "Chart view",
            selected: view === "chart",
            onClick: () => setView("chart")
          }
        ]
      ]}
    />
  );
};
