import { Table } from ".";

import { DriverQualifyingResult } from "../../utils/types/race";
import { DriverRaceResultRow } from "../Row/DriverRaceResultRow";

interface IQualifyingResultsTable {
  data: DriverQualifyingResult[];
}

export const QualifyingResultsTable = ({ data }: IQualifyingResultsTable) => (
  <Table
    data={data}
    renderItem={(result) => {
      const { position, Driver, Constructor, Q1, Q2, Q3 } = result;
      const { givenName: name, familyName: lastname } = Driver;

      const lowQualifying = Q2 !== undefined ? "Q2" : "Q1";
      const finalSession = Q3 !== undefined ? "Q3" : lowQualifying;

      return (
        <DriverRaceResultRow
          position={position}
          driver={{
            name,
            lastname
          }}
          team={Constructor.name}
          value={`${Q3 || Q2 || Q1} (${finalSession})`}
        />
      );
    }}
  />
);
