import type { NextPage } from "next";
import { useRouter } from "next/router";
import { capitalize } from "lodash";
import { v4 as uuidv4 } from "uuid";
import Image from "next/future/image";
import { useState } from "react";
import { List, X } from "phosphor-react";

import { PageLayout } from "@layouts/PageLayout";

import { Teams } from "@components/Teams";
import { LineChart } from "@components/LineChart";
import { DriverBadge } from "@components/DriverBadge";

import { gradient, shadow } from "@utils/mappings";
import {
  driverStandings,
  drivers,
  verstappenQualifyingResults,
  verstappenRaceResults
} from "@utils/mock";
import { getDriversWithTeam } from "@utils/helpers";
import { Driver } from "@utils/types/driver";

interface IDriver {
  name: string;
  lastname: string;
  permanentNumber: string;
  nationality: string;
}

interface ITeam {
  name: string;
  drivers: IDriver[];
}

const data = [
  {
    id: "Race",
    color: "hsl(70, 70%, 50%)",
    data: verstappenRaceResults.map((race) => ({
      x: `${race.round} - ${race.Circuit.Location.country}`,
      y: Number.parseInt(race.Results[0]?.position || "0")
    }))
  },
  {
    id: "Qualifying",
    color: "#2668d9",
    data: verstappenQualifyingResults.map((race) => ({
      x: `${race.round} - ${race.Circuit.Location.country}`,
      y: Number.parseInt(race.QualifyingResults[0]?.position || "0")
    }))
  }
];

const InfoDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  const classes =
    "rounded-xl border-2 border-brand-white-100/10 bg-brand-white-100/5 p-2 backdrop-blur-2xl";

  const DialogEntry = ({ title, text }: { title: string; text: string }) => {
    return (
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-brand-white-100 opacity-80">{text}</p>
      </div>
    );
  };

  return (
    <div className="absolute top-6 right-6 z-30 flex flex-col items-end gap-3">
      <button className={classes} onClick={handleClick}>
        {open ? <X size={24} /> : <List size={24} />}
      </button>
      {open && (
        <div
          className={`${classes} flex flex-col gap-4 rounded-3xl p-7 shadow-info-dialog`}
        >
          <DialogEntry title="Podiums" text="20" />
          <DialogEntry title="Points" text="779" />
          <DialogEntry title="Grands Prix entered" text="97" />
          <DialogEntry title="World Championships" text="0" />
          <DialogEntry title="Highest race finish" text="1 (x5)" />
          <DialogEntry title="Highest grid position" text="1" />
        </div>
      )}
    </div>
  );
};

const Chart = ({ team }: { team: string }) => {
  return (
    <div className="h-80 w-full bg-brand-blue-400">
      <LineChart data={data} team={team} />
    </div>
  );
};

const Drivers = ({ drivers }: { drivers: IDriver[] }) => {
  return (
    <div className="relative flex h-[525px] w-[788px]">
      {drivers.map((driver) => {
        return (
          <div key={uuidv4()} className="relative">
            <div className="absolute left-1/2 bottom-10 z-20 -translate-x-1/2">
              <div className="mb-4 flex flex-col items-center gap-[2px] text-center text-2xl text-brand-white-100 drop-shadow-card-text-md">
                <h2>{driver.name}</h2>
                <h2 className="font-medium uppercase">{driver.lastname}</h2>
              </div>
              <DriverBadge
                number={driver.permanentNumber}
                country={driver.nationality}
              />
            </div>
            <div className="absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-b from-transparent to-brand-blue-400" />
            <Image
              src={`/drivers/front/${driver.name}-${driver.lastname}.jpeg`}
              alt=""
              width={1920}
              height={1920}
              className="h-full w-full flex-none object-cover object-top"
            />
          </div>
        );
      })}
    </div>
  );
};

const TeamData = ({ name, drivers }: ITeam) => {
  const clean = {
    name: name.toLowerCase().replace(/\s/g, "")
  };

  return (
    <div
      className={`relative flex-none overflow-hidden rounded-[40px] ${
        shadow[clean.name]
      }`}
    >
      <div className="relative z-10 p-[5px]">
        <InfoDialog />
        <div className="relative overflow-hidden rounded-[35px]">
          <Drivers drivers={drivers} />
          <Chart team={name} />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-gradient-to-b ${
          gradient[clean.name]
        }`}
      />
    </div>
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
        const driverData = drivers.find(
          (d) => d.driverId === driver.driverId
        ) as Driver;

        return {
          name: driverData?.givenName,
          lastname: driverData?.familyName,
          permanentNumber: driverData?.permanentNumber,
          nationality: driverData?.nationality
        };
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
