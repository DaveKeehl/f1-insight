import { useState } from "react";
import Image from "next/future/image";
import { X, List } from "phosphor-react";
import { capitalize } from "lodash";
import { v4 as uuidv4 } from "uuid";

import { DriverBadge } from "../DriverBadge";
import { LineChart } from "../LineChart";
import {
  verstappenQualifyingResults,
  verstappenRaceResults
} from "../../utils/mock";
import { gradient, shadow } from "../../utils/mappings";

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

export const Team = (props: ITeam) => {
  const { name } = props;

  const corrections: { [key: string]: string } = {
    Alphatauri: "AlphaTauri",
    Mclaren: "McLaren"
  };

  const clean = {
    name: name
      .split(" ")
      .map((e) => capitalize(e))
      .join(" ")
  };

  return (
    <div className="flex flex-auto flex-col items-center gap-10 overflow-scroll bg-brand-blue-400 px-14 py-12 text-brand-white-100">
      <Image src="/f1_logo.svg" alt="" width={120} height={30} />
      <h1 className="text-center text-[40px] font-medium text-brand-white-100">
        {corrections[clean.name] || clean.name}
      </h1>
      <TeamData {...props} />
    </div>
  );
};
