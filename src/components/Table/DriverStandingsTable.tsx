import DriversTable from "@/components/Table/DriversTable";

import { getDriverStandings } from "@/db/driver-standings/queries";

export default function DriverStandingsTable({
  rows
}: {
  rows: Awaited<ReturnType<typeof getDriverStandings>>;
}) {
  return (
    <DriversTable
      rows={rows.map((row) => {
        return {
          name: row.forename ?? "",
          lastname: row.surname ?? "",
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
