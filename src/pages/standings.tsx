import { useState } from "react";
import type { NextPage } from "next";

import { PageLayout } from "@layouts/PageLayout";

import { DriverStandingsTable } from "@components/Table/DriverStandingsTable";
import { ConstructorStandingsTable } from "@components/Table/ConstructorStandingsTable";

import { driverStandings, constructorStandings } from "@utils/mock";

const StandingsPage: NextPage = () => {
  const [mode, setMode] = useState<"drivers" | "constructors">("drivers");

  const table =
    mode === "drivers" ? (
      <DriverStandingsTable data={driverStandings} />
    ) : (
      <ConstructorStandingsTable data={constructorStandings} />
    );

  return (
    <PageLayout
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
      body={table}
    />
  );
};

export default StandingsPage;
