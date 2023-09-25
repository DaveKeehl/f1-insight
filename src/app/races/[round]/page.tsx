import type { Metadata } from "next";
import Image from "next/image";

import QualifyingResultsTable from "@/components/Table/QualifyingResultsTable";
import RaceResultsTable from "@/components/Table/RaceResultsTable";
import TableSwitcher from "@/components/Table/TableSwitcher";

import { getPrettyDate } from "@/utils/helpers";
import { getRaceResults } from "@/db/results/queries";
import { getRaceByRound } from "@/db/races/queries";
import { getQualifyingResults } from "@/db/qualifying/queries";
import { countriesCorrections } from "@/utils/mappings";

type Props = {
  params: { round: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const circuit = "CIRCUIT"; // TODO

  return {
    title: `${circuit} (Round ${params.round})`
  };
}

export default async function RacePage({ params }: Props) {
  const race = (await getRaceByRound(+params.round))[0];
  const qualifyingResults = await getQualifyingResults(+params.round);
  const raceResults = await getRaceResults(+params.round);

  return (
    <div className="relative flex w-full flex-col items-center gap-10 overflow-y-auto px-4 pb-8 pt-12 md:pb-16 lg:px-14">
      <Image src="/f1-logo.svg" alt="Formula 1 logo" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[40px] font-medium text-brand-white-100">
          {race.location}
        </h1>
        <p className="whitespace-pre break-normal text-center text-base font-medium uppercase text-brand-blue-100 opacity-70">
          {`@${countriesCorrections[race.country ?? ""] ?? race.country}  //  ${getPrettyDate(
            race.date
          )}`}
        </p>
      </div>
      <TableSwitcher
        initialMode="drivers"
        data={[
          {
            mode: "qualifying",
            component: <QualifyingResultsTable rows={qualifyingResults} />
          },
          {
            mode: "race",
            component: <RaceResultsTable rows={raceResults} />
          }
        ]}
      />
    </div>
  );
}
