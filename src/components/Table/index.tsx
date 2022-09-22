import { v4 as uuidv4 } from "uuid";

import { DriverRaceResultRow } from "../Row/DriverRaceResultRow";

interface ITable<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const Table = <T,>({ data, renderItem }: ITable<T>) => (
  <div className="w-full columns-1 gap-[10px] 2xl:columns-2">
    {data.map((item) => {
      return <div key={uuidv4()}>{renderItem(item)}</div>;

      // const { status, Time, positionText } = result;

      // const value =
      //   status === "Finished"
      //     ? Time?.time
      //     : status.startsWith("+")
      //     ? status
      //     : `${positionText} (${status})`;

      // return (
      //   <DriverRaceResultRow
      //     key={result.Driver.driverId}
      //     position={result.position}
      //     status={result.status}
      //     driver={{
      //       name: result.Driver.givenName,
      //       lastname: result.Driver.familyName
      //     }}
      //     team={result.Constructor.name}
      //     value={value || ""}
      //   />
      // );
    })}
  </div>
);
