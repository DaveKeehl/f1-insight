import Image from "next/future/image";
import { v4 as uuidv4 } from "uuid";

import { IPill, Pill } from "../Pill";

interface IResults {
  title: string;
  subtitle?: string;
  buttons: {
    left: IPill[];
    right: IPill[];
  };
}

interface IMenu {
  buttons: {
    left: IPill[];
    right: IPill[];
  };
}

const Menu = ({ buttons }: IMenu) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex gap-[10px]">
        {buttons.left.map((button) => (
          <Pill key={uuidv4()} {...button} />
        ))}
      </div>
      <div className="h-3 w-px bg-brand-blue-200" />
      <div className="flex gap-[10px]">
        {buttons.right.map((button) => (
          <Pill key={uuidv4()} {...button} />
        ))}
      </div>
    </div>
  );
};

export const Results = ({ title, subtitle, buttons }: IResults) => {
  return (
    <div className="flex flex-auto flex-col items-center gap-10 overflow-scroll bg-brand-blue-400 px-14 py-12 text-brand-white-100">
      <Image src="/f1_logo.svg" alt="" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[40px] font-medium text-brand-white-100">
          {title}
        </h1>
        {subtitle && (
          <p className="break-normal text-center text-base font-medium uppercase text-brand-blue-100 opacity-70">
            {subtitle}
          </p>
        )}
      </div>
      <Menu buttons={buttons} />
      {/* <Results results={results} /> */}
    </div>
  );
};
