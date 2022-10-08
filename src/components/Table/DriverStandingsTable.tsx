import { Table } from "./Table";
import { Row } from "../Row";

import { Constructor } from "@utils/types/constructor";
import { DriverStanding } from "@utils/types/standings";
import { teamsCorrections } from "@utils/mappings";

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

      console.log({ team, corrected: teamsCorrections[team] || team });

      return (
        <Row
          position={position}
          name={`${Driver.givenName} ${Driver.familyName}`}
          team={teamsCorrections[team] || team}
          detail={teamsCorrections[team] || team}
          value={points}
        />
      );
    }}
  />
);
