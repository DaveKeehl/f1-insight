import { Row } from "@/components/Row";
import { Table } from "@/components/GenericTable";

import { getRaceResults } from "@/db/results/queries";

export const RaceResultsTable = ({
  results
}: {
  results: Awaited<ReturnType<typeof getRaceResults>>;
}) => (
  <Table
    data={results}
    breakpoint="2xl"
    renderItem={(result) => {
      const lowGridDriversValue = result.status?.status.startsWith("+")
        ? result.status?.status
        : "DNF";

      const value = result.status?.status === "Finished" ? result.time : lowGridDriversValue;

      return (
        <Row
          target="driver"
          position={result.positionOrder.toString()}
          name={`${result.driverForename} ${result.driverSurname}`}
          team={result.constructorName ?? ""}
          value={value ?? ""}
          detail={result.constructorName ?? ""}
        />
      );
    }}
  />
);
