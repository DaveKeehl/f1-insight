import Image from "next/future/image";

import { Card } from "./Card";

interface IDriverCard {
  driverNumber: number;
  name: string;
  lastname: string;
}

const Backdrop = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-tr from-brand-blue-400/50 to-transparent opacity-20" />
  );
};

export const DriverCard = ({ driverNumber, name, lastname }: IDriverCard) => {
  const clean = {
    name: name.toLowerCase(),
    lastname: lastname.toLowerCase().replace(/\s/g, "-")
  };

  const imagePath = `/drivers/side/${clean.name}-${clean.lastname}.png`;

  return (
    <Card
      href={`/drivers/${clean.name}-${clean.lastname}`}
      selected={(asPath) =>
        decodeURI(asPath).split("/").at(-1) ===
        `${clean.name}-${clean.lastname}`
      }
      className="justify-between bg-gradient-to-tr from-brand-white-300 to-brand-white-200 p-4"
    >
      <h1 className="z-20 text-xl font-medium drop-shadow-card-text-sm">
        {driverNumber}
      </h1>
      <div className="z-20 drop-shadow-card-text-md">
        <h1 className="text-xl font-medium">{name}</h1>
        <h1 className="text-xl font-medium uppercase">{lastname}</h1>
      </div>
      <Backdrop />
      <Image
        src={imagePath}
        alt={`${name} ${lastname}`}
        className="absolute top-0 -right-7 aspect-square w-48"
        width={412}
        height={412}
        priority={true}
      />
    </Card>
  );
};
