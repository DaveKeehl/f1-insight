import { useState } from "react";
import Image from "next/future/image";
import { X, List } from "phosphor-react";

import { DriverBadge } from "../DriverBadge";

interface IDriver {
  name: string;
  lastname: string;
  team: string;
}

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
        <div className={`${classes} flex flex-col gap-4 p-7 shadow-xl`}>
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

const DriverData = ({ name, lastname, team }: IDriver) => {
  const clean = {
    team: team.toLowerCase().replace(/\s/g, ""),
  };

  const shadow: { [key: string]: string } = {
    alfaromeo: "shadow-alfaromeo",
    alphatauri: "shadow-alphatauri",
    alpine: "shadow-alpine",
    astonmartin: "shadow-astonmartin",
    ferrari: "shadow-ferrari",
    haas: "shadow-haas",
    mclaren: "shadow-mclaren",
    mercedes: "shadow-mercedes",
    redbull: "shadow-redbull",
    williams: "shadow-williams",
  };

  const gradient: { [key: string]: string } = {
    alfaromeo: "from-[#360C14] via-teams-alfaromeo to-[#360C14]",
    alphatauri: "from-[#1E3039] via-teams-alphatauri to-[#1E3039]",
    alpine: "from-[#0A2839] via-teams-alpine to-[#0A2839]",
    astonmartin: "from-[#123028] via-teams-astonmartin to-[#123028]",
    ferrari: "from-[#3D0108] via-teams-ferrari to-[#3D0108]",
    haas: "from-[#383B3E] via-teams-haas to-[#383B3E]",
    mclaren: "from-[#3D0108] via-teams-mclaren to-[#3D0108]",
    mercedes: "from-[#0F332C] via-teams-mercedes to-[#0F332C]",
    redbull: "from-[#0F2038] via-teams-redbull to-[#0F2038]",
    williams: "from-[#0B343D] via-teams-williams to-[#0B343D]",
  };

  return (
    <div
      className={`relative flex-none overflow-hidden rounded-[40px] ${
        shadow[clean.team]
      }`}
    >
      <div className="relative z-10 p-[5px]">
        <DriverBadge
          number={16}
          country="monaco"
          className="absolute top-6 left-6"
        />
        <InfoDialog />
        <Image
          src={`/drivers/front/${name}-${lastname}.jpeg`}
          alt=""
          width={788}
          height={525}
          className="flex-none rounded-[35px]"
        />
      </div>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-gradient-to-b ${
          gradient[clean.team]
        }`}
      />
    </div>
  );
};

export const Driver = (props: IDriver) => {
  const { name, lastname, team } = props;

  return (
    <div className="flex flex-auto flex-col items-center gap-10 overflow-scroll bg-brand-blue-400 px-14 py-12 text-brand-white-100">
      <Image src="/f1_logo.svg" alt="" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[40px] font-medium text-brand-white-100">
          {name} {lastname}
        </h1>
        <p className="text-center text-base font-medium uppercase text-brand-blue-100 opacity-70">
          {team}
        </p>
      </div>
      <DriverData {...props} />
    </div>
  );
};
