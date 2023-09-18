"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import { type IPill, Pill } from "@/components/Pill";
import { DriverStandingsTable } from "@/components/DriverStandingsTable";

import { getDriverStandings } from "@/db/driver-standings/queries";

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

export default function StandingsTable({
  driverStandings,
  constructorStandings
}: {
  driverStandings: Awaited<ReturnType<typeof getDriverStandings>>;
  constructorStandings: Awaited<ReturnType<typeof getDriverStandings>>; // TODO
}) {
  const [mode, setMode] = useState<"drivers" | "constructors">("drivers");

  const table: Record<"drivers" | "constructors", React.ReactNode> = {
    drivers: <DriverStandingsTable standings={driverStandings} />,
    constructors: <DriverStandingsTable standings={driverStandings} />
  };

  return (
    <>
      <Menu
        buttonGroups={[
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
      />
      {table[mode]}
    </>
  );
}
