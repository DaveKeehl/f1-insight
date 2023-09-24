import DriversTable from "@/components/Table/DriversTable";

import { getRaceResults } from "@/db/results/queries";

export default function RaceResultsTable({
  rows
}: {
  rows: Awaited<ReturnType<typeof getRaceResults>>;
}) {
  return (
    <DriversTable
      rows={rows.map((row) => {
        const lowGridDriversValue = row.status?.status.startsWith("+") ? row.status?.status : "DNF";

        const value = row.status?.status === "Finished" ? row.time : lowGridDriversValue;

        return {
          name: row.driverForename ?? "",
          lastname: row.driverSurname ?? "",
          position: row.positionOrder,
          team: {
            name: row.constructorName ?? "",
            ref: row.constructorRef ?? ""
          },
          value: value ?? ""
        };
      })}
    />
  );
}
