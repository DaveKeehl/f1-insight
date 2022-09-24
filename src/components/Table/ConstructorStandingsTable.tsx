import { Table } from "./Table";
import { Row } from "../Row";

import { ConstructorStanding } from "@utils/types/standings";

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
          position={position}
          name={Constructor.name}
          team={Constructor.name}
          value={points}
        />
      );
    }}
  />
);
