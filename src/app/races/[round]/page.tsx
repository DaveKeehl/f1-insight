import type { Metadata } from "next";
import Image from "next/image";

import Table from "@/components/Table";
import { getRaceResults } from "@/db/results/queries";
import { getQualifyingResults } from "@/db/qualifying/queries";

type Props = {
  params: { round: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const circuit = "CIRCUIT";

  return {
    title: `${circuit} (Round ${params.round})`
  };
}

export default async function RacePage({ params }: Props) {
  const raceResults = await getRaceResults(+params.round);
  const qualifyingResults = await getQualifyingResults(+params.round);

  console.log({ raceResults, qualifyingResults });

  return (
    <div className="relative flex w-full flex-col items-center gap-10 overflow-y-auto px-4 pb-8 pt-12 md:pb-16 lg:px-14">
      <Image src="/f1-logo.svg" alt="Formula 1 logo" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[40px] font-medium text-brand-white-100">BAHRAIN</h1>
        <p className="whitespace-pre break-normal text-center text-base font-medium uppercase text-brand-blue-100 opacity-70">
          @BAHRAIN // 2 - 5 MAR
        </p>
      </div>
      <Table raceResult={raceResults} qualifyingResult={qualifyingResults} sprintResult={null} />
    </div>
  );
}
