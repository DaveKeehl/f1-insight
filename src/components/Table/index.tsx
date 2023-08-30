"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import { type IPill, Pill } from "@/components/Pill";
import { RaceResultsTable } from "@/components/RaceResultsTable";
import { QualifyingResultsTable } from "@/components/QualifyingResultsTable";
import { SprintResultsTable } from "@/components/SprintResultsTable";

import { SprintResult } from "@/utils/types/race";
import { getRaceResults } from "@/db/results/queries";
import { getQualifyingResults } from "@/db/qualifying/queries";

const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`${className} h-3 w-px bg-brand-blue-200`.trim()} />
);

const Menu = ({ buttonGroups }: { buttonGroups: IPill[][] }) => {
  return (
    <div className="flex items-center gap-5">
      {buttonGroups.map((buttonGroup, idx) => (
        <div key={uuid()} className="flex items-center gap-[10px]">
          {buttonGroup
            .filter((button) => !button.hidden)
            .map((button) => (
              <Pill key={uuid()} {...button} />
            ))}
          {idx < buttonGroups.length - 1 && <Divider className="ml-[10px]" />}
        </div>
      ))}
    </div>
  );
};

export default function Table({
  raceResult,
  qualifyingResult,
  sprintResult
}: {
  raceResult: Awaited<ReturnType<typeof getRaceResults>>;
  qualifyingResult: Awaited<ReturnType<typeof getQualifyingResults>>;
  sprintResult: SprintResult | null;
}) {
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
    <>
      <Menu
        buttonGroups={[
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
      />
      {table[mode]}
    </>
  );
}
