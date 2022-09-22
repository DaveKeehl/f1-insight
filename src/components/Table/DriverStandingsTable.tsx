import { Table } from ".";
import { Constructor } from "../../utils/types/constructor";

import { DriverStanding } from "../../utils/types/standings";
import { DriverRaceResultRow } from "../Row/DriverRaceResultRow";

interface IDriverStandingsTable {
  data: DriverStanding[];
}

export const DriverStandingsTable = ({ data }: IDriverStandingsTable) => (
  <Table
    data={data}
    breakpoint="lg"
    renderItem={(result) => {
      const { position, Driver, Constructors, points } = result;
      const { givenName: name, familyName: lastname } = Driver;

      return (
        <DriverRaceResultRow
          position={position}
          driver={{
            name,
            lastname
          }}
          team={(Constructors[0] as Constructor).name}
          value={points}
        />
      );
    }}
  />
);
