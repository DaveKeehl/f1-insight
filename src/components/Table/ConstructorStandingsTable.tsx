import ConstructorsTable from "@/components/Table/ConstructorsTable";

import { getConstructorStandings } from "@/db/constructor-standings/queries";

export default function ConstructorStandingsTable({
  rows
}: {
  rows: Awaited<ReturnType<typeof getConstructorStandings>>;
}) {
  return (
    <ConstructorsTable
      rows={rows.map((row) => {
        return {
          position: row.position ?? 0,
          team: {
            name: row.constructorName ?? "",
            ref: row.constructorRef ?? ""
          },
          value: row.points.toString()
        };
      })}
    />
  );
}
