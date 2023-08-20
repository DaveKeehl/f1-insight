import Image from "next/image";
import type { Metadata } from "next";

import DriverData from "@/components/DriverData";

import { getDriver } from "@/db/drivers/queries";

type Props = {
  params: { driver: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { forename, surname } = (await getDriver(params.driver))[0];

  return {
    title: `${forename} ${surname}`
  };
}

export default async function DriverPage({ params }: Props) {
  const { forename, surname } = (await getDriver(params.driver))[0];

  const team = "TEAM";

  return (
    <div className="relative flex w-full flex-col items-center gap-10 overflow-y-auto px-4 pb-8 pt-12 md:pb-16 lg:px-14">
      <Image src="/f1-logo.svg" alt="Formula 1 logo" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[40px] font-medium text-brand-white-100">
          {forename} {surname}
        </h1>
        <p className="whitespace-pre break-normal text-center text-base font-medium uppercase text-brand-blue-100 opacity-70">
          {team}
        </p>
      </div>
      <DriverData
        driverWithTeam={{
          team,
          code: "code",
          dateOfBirth: "DOB",
          driverId: "driverId",
          familyName: "family name",
          givenName: "given name",
          nationality: "nationality",
          permanentNumber: "no.",
          url: "url"
        }}
        raceResults={[]}
        qualifyingResults={[]}
        races={[]}
        driverCareerInfo={{
          nationality: "NATIONALITY",
          dateOfBirth: "DOB",
          placeOfBirth: "POB",
          grandsPrix: 0,
          points: 0,
          podiums: 0,
          polePositions: 0,
          wins: 0,
          worldChampionships: 0,
          fastestLaps: 0
        }}
      />
    </div>
  );
}
