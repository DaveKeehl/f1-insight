import { chunk } from "lodash";
import { v4 as uuidv4 } from "uuid";

import { DriverRaceResult } from "../../utils/types/race";
import { Row } from "../Row";

interface ITable {
  results: DriverRaceResult[];
}

export const Table = ({ results }: ITable) => (
  <div className="flex w-full flex-col gap-[10px] 2xl:flex-row">
    {chunk(results, results.length / 2).map((chunk) => (
      <div key={uuidv4()} className="flex w-full flex-col gap-[10px]">
        {chunk.map((result) => {
          const { status, Time, positionText } = result;

          const value =
            status === "Finished"
              ? Time?.time
              : status.startsWith("+")
              ? status
              : `${positionText} (${status})`;

          return (
            <Row
              key={result.position}
              position={result.position}
              positionText={result.positionText}
              status={result.status}
              driver={{
                name: result.Driver.givenName,
                lastname: result.Driver.familyName,
              }}
              team={result.Constructor.name}
              value={value || ""}
            />
          );
        })}
      </div>
    ))}
  </div>
);
