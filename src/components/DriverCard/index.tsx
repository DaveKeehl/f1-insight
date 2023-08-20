"use client";

import Image from "next/image";
import { useState } from "react";

import Card from "@/components/Card";

import { getAllCurrentDrivers } from "@/db/drivers/queries";

const Backdrop = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-tr from-brand-blue-400/50 to-transparent opacity-20" />
  );
};

export default function DriverCard({
  forename,
  surname,
  driverRef,
  number
}: Awaited<ReturnType<typeof getAllCurrentDrivers>>[number]) {
  const [hover, setHover] = useState(false);

  const clean = {
    forename: forename.toLowerCase(),
    surname: surname.toLowerCase().replace(/\s/g, "-")
  };

  const imagePath = `/drivers/side/${clean.forename}-${clean.surname}.png`;

  const hoverEffect = hover && "scale-[105%]";

  return (
    <Card
      href={`/drivers/${driverRef}`}
      selected={(asPath) => decodeURI(asPath).split("/").at(-1) === `${driverRef}`}
      className="justify-between bg-gradient-to-tr from-brand-white-300 to-brand-white-200 p-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1 className="pointer-events-none z-20 text-xl font-medium drop-shadow-card-text-sm">
        {number}
      </h1>
      <div className="pointer-events-none z-20 drop-shadow-card-text-md">
        <h1 className="text-xl">{forename}</h1>
        <h1 className="text-xl font-medium uppercase">{surname}</h1>
      </div>
      <Backdrop />
      <Image
        src={imagePath}
        alt={`${forename} ${surname}`}
        className={`absolute -right-7 top-0 aspect-square w-48 transition-transform ${hoverEffect}`.trim()}
        width={412}
        height={412}
        priority={true}
      />
    </Card>
  );
}
