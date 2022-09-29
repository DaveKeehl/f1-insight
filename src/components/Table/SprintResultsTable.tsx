import { Table } from "./Table";
import { Row } from "../Row";

import { DriverRaceResult } from "@utils/types/race";

interface ISprintResultsTable {
  data?: DriverRaceResult[];
}

export const SprintResultsTable = ({ data }: ISprintResultsTable) => (
  <Table
    data={data || []}
    breakpoint="2xl"
    renderItem={(result) => {
      const { status, Time, positionText, position, Driver, Constructor } =
        result;

      const lowGridDriversValue = status.startsWith("+")
        ? status
        : `${positionText} (${status})`;

      const value =
        status === "Finished" ? (Time?.time as string) : lowGridDriversValue;

      return (
        <Row
          position={position}
          name={`${Driver.givenName} ${Driver.familyName}`}
          team={Constructor.name}
          value={value}
        />
      );
    }}
  />
);
