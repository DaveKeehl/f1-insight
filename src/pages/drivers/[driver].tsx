import type { NextPage } from "next";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { capitalize } from "lodash";
import { useState } from "react";
import { List, X } from "phosphor-react";

import { PageLayout } from "@layouts/PageLayout";

import { Drivers } from "@components/Drivers";
import { DriverBadge } from "@components/DriverBadge";
import { LineChart } from "@components/LineChart";

import {
  driverStandings,
  verstappenQualifyingResults,
  verstappenRaceResults
} from "@utils/mock";
import { getDriversWithTeam } from "@utils/helpers";
import { gradient, shadow } from "@utils/mappings";

interface IDriver {
  name: string;
  lastname: string;
  team: string;
  permanentNumber: string;
  nationality: string;
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
    <div className="absolute top-6 right-6 flex flex-col items-end gap-3">
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

const DriverData = ({
  name,
  lastname,
  team,
  permanentNumber,
  nationality
}: IDriver) => {
  const clean = {
    team: team.toLowerCase().replace(/\s/g, "")
  };

  return (
    <div
      className={`relative flex-none overflow-hidden rounded-[40px] ${
        shadow[clean.team]
      }`}
    >
      <div className="relative z-10 p-[5px]">
        <div className="relative z-10">
          <DriverBadge
            number={permanentNumber}
            country={nationality}
            className="absolute top-6 left-6"
          />
          <InfoDialog />
        </div>
        <div className="relative overflow-hidden rounded-[35px]">
          <div className="relative h-[525px] w-[788px]">
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-brand-blue-400" />
            <Image
              src={`/drivers/front/${name}-${lastname}.jpeg`}
              alt=""
              width={1920}
              height={1920}
              className="h-full w-full flex-none object-cover object-top"
            />
          </div>
          <div className="h-80 w-full bg-brand-blue-400">
            <LineChart data={data} team={team} />
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-gradient-to-b ${
          gradient[clean.team]
        }`}
      />
    </div>
  );
};

const DriverPage: NextPage = () => {
  const router = useRouter();
  const { driver } = router.query;

  if (driver) {
    const [name, lastname] = (driver as string).split("-");

    const drivers = getDriversWithTeam(driverStandings);
    const driverData = drivers.find(
      (driver) =>
        name === driver.givenName.toLowerCase() &&
        lastname === driver.familyName.toLowerCase()
    );

    if (name && lastname && driverData !== undefined) {
      return (
        <PageLayout
          side={<Drivers />}
          title={`${capitalize(name)} ${capitalize(lastname)}`}
          subtitle={driverData.team}
          body={
            <DriverData
              name={name}
              lastname={lastname}
              team={driverData.team}
              permanentNumber={driverData.permanentNumber}
              nationality={driverData.nationality}
            />
          }
        />
      );
    }
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default DriverPage;
