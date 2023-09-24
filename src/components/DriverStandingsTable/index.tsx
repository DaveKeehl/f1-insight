import Row from "@/components/Row";
import { Table } from "@/components/GenericTable";

import { getDriverStandings } from "@/db/driver-standings/queries";

export const DriverStandingsTable = ({
  standings
}: {
  standings: Awaited<ReturnType<typeof getDriverStandings>>;
}) => (
  <Table
    data={standings}
    breakpoint="lg"
    renderItem={(result) => {
      const { position, forename, surname, constructorName, points } = result;

      return (
        <Row
          target="driver"
          position={position?.toString() ?? ""}
          name={`${forename} ${surname}`}
          team={constructorName ?? ""}
          detail={constructorName ?? ""}
          value={points.toString()}
        />
      );
    }}
  />
);
