import { DriverRaceResult } from "@utils/types/race";

import { Row } from "../Row";
import { Table } from "./Table";

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

      // const lowGridDriversValue = status.startsWith("+")
      //   ? status
      //   : `${positionText} (${status})`;

      const lowGridDriversValue = status.startsWith("+") ? status : "DNF";

      const value =
        status === "Finished" ? (Time?.time as string) : lowGridDriversValue;

      return (
        <Row
          target="driver"
          position={position}
          name={`${Driver.givenName} ${Driver.familyName}`}
          team={Constructor.name}
          value={value}
        />
      );
    }}
  />
);
