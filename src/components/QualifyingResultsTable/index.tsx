import { Row } from "@/components/Row";
import { Table } from "@/components/GenericTable";

import { getQualifyingResults } from "@/db/qualifying/queries";

export const QualifyingResultsTable = ({
  results
}: {
  results: Awaited<ReturnType<typeof getQualifyingResults>>;
}) => (
  <Table
    data={results}
    breakpoint="2xl"
    renderItem={(result) => {
      const lowQualifying = result.q2 !== undefined ? "Q2" : "Q1";
      const finalSession = result.q3 !== undefined ? "Q3" : lowQualifying;

      return (
        <Row
          target="driver"
          position={result.position?.toString() ?? ""}
          name={`${result.driverForename} ${result.driverSurname}`}
          team={result.constructorName ?? ""}
          value={`${result.q3 ?? result.q2 ?? result.q1} (${finalSession})`}
          detail={result.constructorName ?? ""}
        />
      );
    }}
  />
);
