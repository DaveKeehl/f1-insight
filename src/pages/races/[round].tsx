import type { NextPage } from "next";
import { useRouter } from "next/router";

import { PageLayout } from "@layouts/PageLayout";
import { Races } from "../../components/Races";
import { raceResult, qualifyingResult } from "../../utils/mock";
import { getPrettyDate } from "../../utils/helpers";
import { useState } from "react";
import { RaceResultsTable } from "@components/Table/RaceResultsTable";
import { QualifyingResultsTable } from "@components/Table/QualifyingResultsTable";

const RacePage: NextPage = () => {
  const [mode, setMode] = useState<"race" | "qualifying">("race");

  const router = useRouter();
  const { round } = router.query; // use round to fetch data

  if (raceResult[0] && qualifyingResult[0]) {
    const { Circuit, date, Results: RaceResults } = raceResult[0];
    const { QualifyingResults } = qualifyingResult[0];

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
        side={<Races />}
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
        ]}
        body={table}
      />
    );
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default RacePage;
