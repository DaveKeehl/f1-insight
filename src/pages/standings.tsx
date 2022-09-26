import { useState } from "react";
import type { GetStaticPropsResult, InferGetStaticPropsType } from "next";

import { PageLayout } from "@layouts/PageLayout";

import {
  DriverStandingsTable,
  ConstructorStandingsTable
} from "@components/Table";

import { getConstructorStandings, getDriverStandings } from "@utils/services";
import { ConstructorStanding, DriverStanding } from "@utils/types/standings";

export default function StandingsPage({
  driverStandings,
  constructorStandings
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    driverStandings: DriverStanding[];
    constructorStandings: ConstructorStanding[];
  }>
> {
  const driverStandings = await getDriverStandings();
  const constructorStandings = await getConstructorStandings();

  return {
    props: {
      driverStandings,
      constructorStandings
    },
    revalidate: 60
  };
}
