import { teamsCorrections } from "@utils/mappings";
import { DriverRaceResult } from "@utils/types/race";

import { Row } from "../Row";
import { Table } from "./Table";

interface IRaceResultsTable {
  data: DriverRaceResult[];
}

export const RaceResultsTable = ({ data }: IRaceResultsTable) => (
  <Table
    data={data}
    breakpoint="2xl"
    renderItem={(result) => {
      const { status, Time, positionText, position, Driver, Constructor } =
        result;

      // const lowGridDriversValue = status.startsWith("+")
      //   ? status
      //   : `${positionText} (${status})`;

      const value = status === "Finished" ? (Time?.time as string) : "DNF";

      return (
        <Row
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
