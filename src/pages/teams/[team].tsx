import type { NextPage } from "next";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { capitalize } from "lodash";

import { PageLayout } from "@layouts/PageLayout";
import { ActorLayout } from "@layouts/ActorLayout";

import { Teams } from "@components/Teams";
import { LineChart } from "@components/LineChart";
import { DriverBadge } from "@components/DriverBadge";
import { InfoDialog } from "@components/InfoDialog";
import { DriverImage } from "@components/DriverImage";

import {
  driverStandings,
  drivers,
  verstappenQualifyingResults,
  verstappenRaceResults
} from "@utils/mock";
import { getDriversWithTeam } from "@utils/helpers";
import { IDriver } from "@utils/types/driver";

interface ITeam {
  name: string;
  drivers: IDriver[];
}

interface IDriverIdentity {
  driver: IDriver;
}

const DriverIdentity = ({ driver }: IDriverIdentity) => (
  <div className="absolute left-1/2 bottom-10 z-20 -translate-x-1/2">
    <div className="mb-4 flex flex-col items-center gap-[2px] text-center text-2xl text-brand-white-100 drop-shadow-card-text-md">
      <h2>{driver.givenName}</h2>
      <h2 className="font-medium uppercase">{driver.familyName}</h2>
    </div>
    <DriverBadge
      permanentNumber={driver.permanentNumber}
      nationality={driver.nationality}
    />
  </div>
);

const Drivers = ({ drivers }: { drivers: IDriver[] }) => (
  <div className="relative flex h-[525px] w-[788px]">
    {drivers.map((driver) => {
      return (
        <div key={uuidv4()} className="relative">
          <DriverIdentity driver={driver} />
          <DriverImage
            givenName={driver.givenName}
            familyName={driver.familyName}
          />
        </div>
      );
    })}
  </div>
);

const TeamData = ({ name, drivers }: ITeam) => {
  const clean = {
    name: name.toLowerCase().replace(/\s/g, "")
  };

  return (
    <ActorLayout
      team={clean.name}
      infoDialog={<InfoDialog />}
      drivers={<Drivers drivers={drivers} />}
      chart={
        <LineChart
          data={[
            {
              id: "Race",
              data: verstappenRaceResults.map((race) => ({
                x: `${race.round} - ${race.Circuit.Location.country}`,
                y: Number.parseInt(race.Results[0]?.position || "0")
              }))
            },
            {
              id: "Qualifying",
              data: verstappenQualifyingResults.map((race) => ({
                x: `${race.round} - ${race.Circuit.Location.country}`,
                y: Number.parseInt(race.QualifyingResults[0]?.position || "0")
              }))
            }
          ]}
          team={name}
        />
      }
    />
  );
};

const TeamPage: NextPage = () => {
  const router = useRouter();
  const { team } = router.query;

  if (team) {
    const clean = {
      team: (team as string)
        .split("-")
        .map((e) => capitalize(e))
        .join(" ")
    };

    const corrections: { [key: string]: string } = {
      Alphatauri: "AlphaTauri",
      Mclaren: "McLaren"
    };

    const teamDrivers = getDriversWithTeam(driverStandings)
      .filter((driver) => driver.team === clean.team)
      .map((driver) => {
        return drivers.find((d) => d.driverId === driver.driverId) as IDriver;
      });

    return (
      <PageLayout
        title={corrections[clean.team] || clean.team}
        side={<Teams />}
        body={<TeamData name={clean.team} drivers={teamDrivers} />}
      />
    );
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default TeamPage;
