import Image from "next/future/image";
import Link from "next/link";

import { Button } from "../Button";

export const Sidebar = () => {
  return (
    <aside className="flex flex-row items-center justify-between bg-brand-red-200 px-6 py-3 md:h-screen md:w-16 md:flex-col md:px-3 md:py-6">
      <div className="flex flex-row items-center gap-16 md:flex-col">
        <Link href="/">
          <a>
            <Image
              src="/f1_logo.svg"
              alt=""
              width={48}
              height={12}
              className="hover:cursor-pointer"
            />
          </a>
        </Link>
        <div className="flex w-fit flex-row items-center gap-4 md:flex-col">
          {/* <Button icon="ChartLine" /> */}
          <Button icon="FlagCheckered" text="Races" href="/races" />
          <Button icon="User" text="Drivers" href="/drivers" />
          <Button icon="Users" text="Teams" href="/teams" />
          <Button icon="Trophy" text="Standings" href="/standings" />
        </div>
      </div>
      <Link href="https://github.com/DaveKeehl/f1-insights">
        <a target="_blank">
          <Image
            src="/github.svg"
            alt=""
            width={26}
            height={26}
            className="hover:cursor-pointer"
          />
        </a>
      </Link>
    </aside>
  );
};
