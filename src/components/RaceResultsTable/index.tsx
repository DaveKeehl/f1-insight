import { teamsCorrections } from "@/utils/mappings";
import { DriverRaceResult } from "@/utils/types/race";

import { Row } from "@/components/Row";
import { Table } from "@/components/GenericTable";

interface IRaceResultsTable {
  data: DriverRaceResult[];
}

export const RaceResultsTable = ({ data }: IRaceResultsTable) => (
  <Table
    data={data}
    breakpoint="2xl"
    renderItem={(result) => {
      const { status, Time, positionText, position, Driver, Constructor } = result;

      // const lowGridDriversValue = status.startsWith("+")
      //   ? status
      //   : `${positionText} (${status})`;

      const lowGridDriversValue = status.startsWith("+") ? status : "DNF";

      const value = status === "Finished" ? (Time?.time as string) : lowGridDriversValue;

      return (
        <Row
          target="driver"
          position={position}
          name={`${Driver.givenName} ${Driver.familyName}`}
          team={Constructor.name}
          value={value}
          detail={teamsCorrections[Constructor.name] || Constructor.name}
        />
      );
    }}
  />
);
