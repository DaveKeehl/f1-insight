import DriversTable from "@/components/Table/DriversTable";

import { getQualifyingResults } from "@/db/qualifying/queries";

export default function QualifyingResultsTable({
  rows
}: {
  rows: Awaited<ReturnType<typeof getQualifyingResults>>;
}) {
  return (
    <DriversTable
      rows={rows.map((row) => {
        const lowQualifying = row.q2 !== undefined ? "Q2" : "Q1";
        const finalSession = row.q3 !== undefined ? "Q3" : lowQualifying;

        return {
          name: row.driverForename ?? "",
          lastname: row.driverSurname ?? "",
          position: row.position ?? 0,
          team: {
            name: row.constructorName ?? "",
            ref: row.constructorRef ?? ""
          },
          value: `${row.q3 ?? row.q2 ?? row.q1} (${finalSession})`
        };
      })}
    />
  );
}
