import { ConstructorStanding } from "@utils/types/standings";

import { Row } from "../Row";
import { Table } from "./Table";

interface IConstructorStandingsTable {
  data: ConstructorStanding[];
}

export const ConstructorStandingsTable = ({
  data
}: IConstructorStandingsTable) => (
  <Table
    data={data}
    breakpoint="lg"
    renderItem={(result) => {
      const { position, Constructor, points } = result;

      return (
        <Row
          target="team"
          position={position}
          name={Constructor.name}
          team={Constructor.name}
          value={points}
        />
      );
    }}
  />
);
