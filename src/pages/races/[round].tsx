import { useState } from "react";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType
} from "next";

import { PageLayout } from "@layouts/PageLayout";

import { Races } from "@components/Cards";
import {
  RaceResultsTable,
  QualifyingResultsTable,
  SprintResultsTable
} from "@components/Table";

import { getPrettyDate } from "@utils/helpers";
import {
  getDriverRaceResults,
  getQualifyingResult,
  getRaceResult,
  getRaceSchedule,
  getRacesSchedule,
  getSprintResult
} from "@utils/services";
import {
  QualifyingResult,
  RaceResult,
  RaceSchedule,
  SprintResult
} from "@utils/types/race";
import { DRIVER_THAT_NEVER_MISSED_A_RACE } from "@utils/constants";

export default function RacePage({
  raceResult,
  qualifyingResult,
  sprintResult,
  races,
  round
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [mode, setMode] = useState<"race" | "qualifying" | "sprint">("race");
  // const [view, setView] = useState<"table" | "chart">("table");

  const { Circuit, date, Results: RaceResults } = raceResult;
  const { QualifyingResults } = qualifyingResult;

  const clean = {
    circuitId: Circuit.circuitId.replace(/_/g, " ")
  };

  const table = {
    race: <RaceResultsTable data={RaceResults} />,
    qualifying: <QualifyingResultsTable data={QualifyingResults} />,
    sprint: <SprintResultsTable data={sprintResult?.SprintResults} />
  };

  return (
    <PageLayout
      headTitle={`F1 Insights - ${Circuit.Location.country} (Round ${round})`}
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
            text: "sprint",
            selected: mode === "sprint",
            onClick: () => setMode("sprint"),
            hidden: sprintResult === null
          },
          {
            text: "race",
            selected: mode === "race",
            onClick: () => setMode("race")
          }
        ]
        // [
        //   {
        //     text: "table",
        //     selected: view === "table",
        //     onClick: () => setView("table")
        //   },
        //   {
        //     text: "chart",
        //     selected: view === "chart",
        //     onClick: () => setView("chart")
        //   }
        // ]
      ]}
      body={table[mode]}
    />
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ round: string }>
): Promise<
  GetStaticPropsResult<{
    raceResult: RaceResult;
    qualifyingResult: QualifyingResult;
    sprintResult: SprintResult | null;
    races: RaceSchedule[];
    round: number;
  }>
> {
  const round = Number.parseInt(context.params?.round as string);
  const driverRaceResults = await getDriverRaceResults(
    DRIVER_THAT_NEVER_MISSED_A_RACE
  );
  const races = (await getRacesSchedule()).slice(0, driverRaceResults.length);
  const raceSchedule = await getRaceSchedule(round);

  const raceResult = await getRaceResult(round);
  const qualifyingResult = await getQualifyingResult(round);
  const sprintResult = raceSchedule.Sprint
    ? await getSprintResult(round)
    : null;

  return {
    props: {
      raceResult,
      qualifyingResult,
      sprintResult,
      races,
      round
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
