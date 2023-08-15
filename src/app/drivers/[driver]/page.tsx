import Image from "next/image";

import DriverData from "@/components/DriverData";

export default function DriverPage({ params }: { params: { driver: string } }) {
  const team = "TEAM";

  return (
    <div className="relative flex w-full flex-col items-center gap-10 overflow-y-auto px-4 pb-8 pt-12 md:pb-16 lg:px-14">
      <Image src="/f1-logo.svg" alt="Formula 1 logo" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[40px] font-medium text-brand-white-100">
          {decodeURIComponent(params.driver)}
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
