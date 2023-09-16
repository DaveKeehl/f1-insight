"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import { type IPill, Pill } from "@/components/Pill";
import { RaceResultsTable } from "@/components/RaceResultsTable";
import { QualifyingResultsTable } from "@/components/QualifyingResultsTable";

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
  qualifyingResult
}: {
  raceResult: Awaited<ReturnType<typeof getRaceResults>>;
  qualifyingResult: Awaited<ReturnType<typeof getQualifyingResults>>;
}) {
  const [mode, setMode] = useState<"race" | "qualifying">("race");

  const table: Record<"race" | "qualifying", React.ReactNode> = {
    race: <RaceResultsTable results={raceResult} />,
    qualifying: <QualifyingResultsTable results={qualifyingResult} />
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
              text: "race",
              selected: mode === "race",
              onClick: () => setMode("race")
            }
          ]
        ]}
      />
      {table[mode]}
    </>
  );
}
