import Image from "next/image";
import Link from "next/link";

import { Button } from "../Button";

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 flex flex-row items-center justify-between bg-brand-red-200 px-6 py-3 md:h-screen md:w-16 md:flex-col md:px-3 md:py-6 z-[100]">
      <div className="flex w-full flex-row items-center md:flex-col md:gap-16">
        <Link href="/">
          <Image
            src="/f1_logo.svg"
            alt="Formula 1 logo"
            width={48}
            height={12}
            className="hover:cursor-pointer hidden xs:block"
          />
        </Link>
        <div className="mx-auto flex w-full xs:w-fit flex-row justify-around xs:items-center gap-6 md:gap-4 md:flex-col">
          {/* <Button icon="ChartLine" /> */}
          <Button icon="FlagCheckered" text="Races" href="/races" />
          <Button icon="User" text="Drivers" href="/drivers" />
          <Button icon="Users" text="Teams" href="/teams" />
          <Button icon="Trophy" text="Standings" href="/standings" />
        </div>
      </div>
      <Link href="https://github.com/DaveKeehl/f1-insight" target="_blank">
        <Image
          src="/github.svg"
          alt=""
          width={28}
          height={28}
          className="transition-opacity hover:cursor-pointer hover:opacity-70 hidden xs:block"
        />
      </Link>
    </aside>
  );
};
