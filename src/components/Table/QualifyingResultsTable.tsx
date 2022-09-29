import { Table } from "./Table";
import { Row } from "../Row";

import { DriverQualifyingResult } from "@utils/types/race";
import { teamsCorrections } from "@utils/mappings";

interface IQualifyingResultsTable {
  data: DriverQualifyingResult[];
}

export const QualifyingResultsTable = ({ data }: IQualifyingResultsTable) => (
  <Table
    data={data}
    breakpoint="2xl"
    renderItem={(result) => {
      const { position, Driver, Constructor, Q1, Q2, Q3 } = result;

      const lowQualifying = Q2 !== undefined ? "Q2" : "Q1";
      const finalSession = Q3 !== undefined ? "Q3" : lowQualifying;

      return (
        <Row
          position={position}
          name={`${Driver.givenName} ${Driver.familyName}`}
          team={Constructor.name}
          value={`${Q3 || Q2 || Q1} (${finalSession})`}
          detail={teamsCorrections[Constructor.name] || Constructor.name}
        />
      );
    }}
  />
);
