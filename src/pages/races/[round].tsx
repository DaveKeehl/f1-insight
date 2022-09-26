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
import { getQualifyingResult, getRaceResult, getRaces } from "@utils/services";
import { QualifyingResult, RaceResult, RaceSchedule } from "@utils/types/race";

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
  const races = await getRaces();

  if (round < 1 || round > races.length) {
    return {
      notFound: true
    };
  }

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
  const races = await getRaces();

  return {
    paths: races.map((race) => ({
      params: {
        round: race.round
      }
    })),
    fallback: false
  };
};
