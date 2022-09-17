import Image from "next/future/image";
import { DriverBadge } from "../DriverBadge";

interface IDriver {
  name: string;
  lastname: string;
  team: string;
}

export const Driver = ({ name, lastname, team }: IDriver) => {
  return (
    <div className="flex flex-auto flex-col items-center gap-10 overflow-scroll bg-brand-blue-400 px-14 py-12 text-brand-white-100">
      <Image src="/f1_logo.svg" alt="" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[40px] font-medium text-brand-white-100">
          {name} {lastname}
        </h1>
        <p className="text-base font-medium uppercase text-brand-blue-100 opacity-70">
          {team}
        </p>
      </div>
      <div className="relative flex-none overflow-hidden rounded-[40px] shadow-3xl">
        <div className="relative z-10 p-[5px]">
          <DriverBadge
            number={16}
            country="monaco"
            className="absolute top-6 left-6"
          />
          <Image
            src={`/drivers/front/${name}-${lastname}.jpeg`}
            alt=""
            width={788}
            height={525}
            className="flex-none rounded-[35px]"
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#3D0108] via-teams-ferrari to-[#3D0108]" />
      </div>
    </div>
  );
};
