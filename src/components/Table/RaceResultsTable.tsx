import { Table } from ".";

import { DriverRaceResult } from "../../utils/types/race";
import { DriverRaceResultRow } from "../Row/DriverRaceResultRow";

interface IRaceResultsTable {
  data: DriverRaceResult[];
}

export const RaceResultsTable = ({ data }: IRaceResultsTable) => (
  <Table
    data={data}
    renderItem={(result) => {
      const { status, Time, positionText, position, Driver, Constructor } =
        result;
      const { givenName: name, familyName: lastname } = Driver;

      const lowGridDriversValue = status.startsWith("+")
        ? status
        : `${positionText} (${status})`;

      const value =
        status === "Finished" ? (Time?.time as string) : lowGridDriversValue;

      return (
        <DriverRaceResultRow
          position={position}
          driver={{
            name,
            lastname
          }}
          team={Constructor.name}
          value={value}
        />
      );
    }}
  />
);
