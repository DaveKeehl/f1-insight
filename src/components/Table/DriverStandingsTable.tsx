import { Table } from "./Table";
import { Row } from "../Row";

import { Constructor } from "@utils/types/constructor";
import { DriverStanding } from "@utils/types/standings";

interface IDriverStandingsTable {
  data: DriverStanding[];
}

export const DriverStandingsTable = ({ data }: IDriverStandingsTable) => (
  <Table
    data={data}
    breakpoint="lg"
    renderItem={(result) => {
      const { position, Driver, Constructors, points } = result;
      const team = (Constructors[0] as Constructor).name;

      return (
        <Row
          position={position}
          name={`${Driver.givenName} ${Driver.familyName}`}
          team={team}
          detail={team}
          value={points}
        />
      );
    }}
  />
);
