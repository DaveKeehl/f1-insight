import { useState } from "react";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType
} from "next";

import { PageLayout } from "@layouts/PageLayout";

import { Races } from "@components/Cards";
import { RaceResultsTable } from "@components/Table";
import { QualifyingResultsTable } from "@components/Table";

import { getPrettyDate } from "@utils/helpers";
import {
  getDriverRaceResults,
  getQualifyingResult,
  getRaceResult,
  getRaces
} from "@utils/services";
import { QualifyingResult, RaceResult, RaceSchedule } from "@utils/types/race";
import { DRIVER_THAT_NEVER_MISSED_A_RACE } from "@utils/constants";

export default function RacePage({
  raceResult,
  qualifyingResult,
  races
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [mode, setMode] = useState<"race" | "qualifying">("race");
  // const [view, setView] = useState<"table" | "chart">("table");

  const { Circuit, date, Results: RaceResults } = raceResult;
  const { QualifyingResults } = qualifyingResult;

  const clean = {
    circuitId: Circuit.circuitId.replace(/_/g, " ")
  };

  const table =
    mode === "race" ? (
      <RaceResultsTable data={RaceResults} />
    ) : (
      <QualifyingResultsTable data={QualifyingResults} />
    );

  return (
    <PageLayout
      side={<Races races={races} />}
      title={Circuit.Location.country}
      subtitle={`@${clean.circuitId}   //   ${getPrettyDate(date)}`}
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
        ]
        // [
        //   {
        //     text: "table view",
        //     selected: view === "table",
        //     onClick: () => setView("table")
        //   },
        //   {
        //     text: "chart view",
        //     selected: view === "chart",
        //     onClick: () => setView("chart")
        //   }
        // ]
      ]}
      body={table}
    />
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ round: string }>
): Promise<
  GetStaticPropsResult<{
    raceResult: RaceResult;
    qualifyingResult: QualifyingResult;
    races: RaceSchedule[];
  }>
> {
  const round = Number.parseInt(context.params?.round as string);
  const driverRaceResults = await getDriverRaceResults(
    DRIVER_THAT_NEVER_MISSED_A_RACE
  );
  const races = (await getRaces()).slice(0, driverRaceResults.length);

  const raceResult = await getRaceResult(round);
  const qualifyingResult = await getQualifyingResult(round);

  return {
    props: {
      raceResult,
      qualifyingResult,
      races
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const driverRaceResults = await getDriverRaceResults(
    DRIVER_THAT_NEVER_MISSED_A_RACE
  );
  // const races = await getRaces();

  return {
    paths: driverRaceResults.map((race) => ({
      params: {
        round: race.round
      }
    })),
    fallback: false
  };
};
