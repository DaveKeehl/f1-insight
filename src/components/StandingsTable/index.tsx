"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import { type IPill, Pill } from "@/components/Pill";
import DriverStandingsTable from "@/components/Table/DriverStandingsTable";
import ConstructorStandingsTable from "@/components/Table/ConstructorStandingsTable";

import { getDriverStandings } from "@/db/driver-standings/queries";
import { getConstructorStandings } from "@/db/constructor-standings/queries";

const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`${className} h-3 w-px bg-brand-blue-200`.trim()} />
);

const Menu = ({ buttons: buttonGroups }: { buttons: IPill[][] }) => {
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
  constructorStandings: Awaited<ReturnType<typeof getConstructorStandings>>;
}) {
  const [mode, setMode] = useState<"drivers" | "constructors">("drivers");

  const table: Record<"drivers" | "constructors", React.ReactNode> = {
    drivers: <DriverStandingsTable rows={driverStandings} />,
    constructors: <ConstructorStandingsTable rows={constructorStandings} />
  };

  return (
    <>
      <Menu
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
      />
      {table[mode]}
    </>
  );
}
