import { Metadata } from "next";
import Image from "next/image";

import StandingsTable from "@/components/StandingsTable";

import { getDriverStandings } from "@/db/driver-standings/queries";

export const metadata: Metadata = {
  title: "Standings"
};

export default async function StandingsPage() {
  const driverStandings = await getDriverStandings();

  console.log({ driverStandings });

  return (
    <div className="relative flex w-full flex-col items-center gap-10 overflow-y-auto px-4 pb-8 pt-12 md:pb-16 lg:px-14">
      <Image src="/f1-logo.svg" alt="Formula 1 logo" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[40px] font-medium text-brand-white-100">Standings</h1>
      </div>
      <StandingsTable driverStandings={driverStandings} constructorStandings={driverStandings} />
    </div>
  );
}
