import type { GetStaticPropsResult, InferGetStaticPropsType } from "next";
import { useState } from "react";

import { PageLayout } from "@layouts/PageLayout";

import {
  ConstructorStandingsTable,
  DriverStandingsTable
} from "@components/Table";

import { getConstructorStandings, getDriverStandings } from "@utils/services";
import { ConstructorStanding, DriverStanding } from "@utils/types/standings";

export default function StandingsPage({
  driverStandings,
  constructorStandings
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [mode, setMode] = useState<"drivers" | "constructors">("drivers");

  const table = {
    drivers: <DriverStandingsTable data={driverStandings} />,
    constructors: <ConstructorStandingsTable data={constructorStandings} />
  };

  return (
    <PageLayout
      headTitle="Standings"
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
      body={table[mode]}
      showTrigger={false}
    />
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    driverStandings: DriverStanding[];
    constructorStandings: ConstructorStanding[];
  }>
> {
  console.log("--------------");

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
