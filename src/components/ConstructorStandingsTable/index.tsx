import Row from "@/components/Row";
import { Table } from "@/components/GenericTable";

import { getConstructorStandings } from "@/db/constructor-standings/queries";

export const ConstructorStandingsTable = ({
  standings
}: {
  standings: Awaited<ReturnType<typeof getConstructorStandings>>;
}) => (
  <Table
    data={standings}
    breakpoint="lg"
    renderItem={(result) => {
      const { position, constructorName, points } = result;

      return (
        <Row
          target="driver"
          position={position?.toString() ?? ""}
          name={constructorName ?? ""}
          team={""}
          detail={""}
          value={points.toString()}
        />
      );
    }}
  />
);
