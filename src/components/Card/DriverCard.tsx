import Image from "next/future/image";
import { useState } from "react";

import { Card } from "./Card";

interface IDriverCard {
  givenName: string;
  familyName: string;
  permanentNumber: string;
}

const Backdrop = () => {
  return (
    <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-tr from-brand-blue-400/50 to-transparent opacity-20" />
  );
};

export const DriverCard = ({
  givenName,
  familyName,
  permanentNumber
}: IDriverCard) => {
  const [hover, setHover] = useState(false);

  const clean = {
    givenName: givenName.toLowerCase(),
    familyName: familyName.toLowerCase().replace(/\s/g, "-")
  };

  const imagePath = `/drivers/side/${clean.givenName}-${clean.familyName}.png`;

  const hoverEffect = hover && "scale-[105%]";

  return (
    <Card
      href={`/drivers/${clean.givenName}-${clean.familyName}`}
      selected={(asPath) =>
        decodeURI(asPath).split("/").at(-1) ===
        `${clean.givenName}-${clean.familyName}`
      }
      className="justify-between bg-gradient-to-tr from-brand-white-300 to-brand-white-200 p-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1 className="pointer-events-none z-20 text-xl font-medium drop-shadow-card-text-sm">
        {permanentNumber}
      </h1>
      <div className="pointer-events-none z-20 drop-shadow-card-text-md">
        <h1 className="text-xl">{givenName}</h1>
        <h1 className="text-xl font-medium uppercase">{familyName}</h1>
      </div>
      <Backdrop />
      <Image
        src={imagePath}
        alt={`${givenName} ${familyName}`}
        className={`absolute top-0 -right-7 aspect-square w-48 transition-transform ${hoverEffect}`.trim()}
        width={412}
        height={412}
        priority={true}
      />
    </Card>
  );
};
