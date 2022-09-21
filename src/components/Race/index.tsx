import { chunk } from "lodash";
import Image from "next/future/image";
import { v4 as uuidv4 } from "uuid";

import { DriverRaceResult } from "../../utils/types/race";
import { Pill } from "../Pill";
import { Row } from "../Row";

interface IRace {
  circuitId: string;
  country: string;
  date: string;
  results: DriverRaceResult[];
}

interface IResults {
  results: DriverRaceResult[];
}

const Results = ({ results }: IResults) => (
  <div className="flex w-full flex-col gap-[10px] 2xl:flex-row">
    {chunk(results, results.length / 2).map((chunk) => (
      <div key={uuidv4()} className="flex w-full flex-col gap-[10px]">
        {chunk.map((result) => (
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
            time={result.Time?.time}
          />
        ))}
      </div>
    ))}
  </div>
);

export const Race = ({ circuitId, country, date, results }: IRace) => {
  const clean = {
    circuitId: circuitId.replace(/_/g, " "),
  };

  return (
    <div className="flex flex-auto flex-col items-center gap-10 overflow-scroll bg-brand-blue-400 px-14 py-12 text-brand-white-100">
      <Image src="/f1_logo.svg" alt="" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[40px] font-medium text-brand-white-100">
          {country}
        </h1>
        <p className="break-normal text-center text-base font-medium uppercase text-brand-blue-100 opacity-70">
          @{clean.circuitId} {" // "} {date}
        </p>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex gap-[10px]">
          <Pill text="Qualifying" selected={true} />
          <Pill text="Race" />
        </div>
        <div className="h-3 w-px bg-brand-blue-200" />
        <div className="flex gap-[10px]">
          <Pill text="Table view" selected={true} />
          <Pill text="Chart view" />
        </div>
      </div>
      <Results results={results} />
    </div>
  );
};
