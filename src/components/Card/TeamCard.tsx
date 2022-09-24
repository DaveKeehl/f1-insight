import Image from "next/future/image";

import { Card } from "./Card";

interface ITeamCard {
  name: string;
}

const Backdrop = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-tr from-brand-blue-400/50 to-transparent opacity-20" />
  );
};

export const TeamCard = ({ name }: ITeamCard) => {
  const clean = {
    name: name.toLowerCase().replace(/\s/g, "-")
  };

  const imagePath = `/teams/${clean.name}.png`;

  return (
    <Card
      href={`/teams/${clean.name}`}
      selected={(asPath) => asPath.split("/").at(-1) === clean.name}
      className="items-center bg-gradient-to-tr from-brand-white-300 to-brand-white-200 px-4 py-10"
    >
      <h1 className="z-20 text-center text-2xl font-medium drop-shadow-card-text-md">
        {name}
      </h1>
      <Backdrop />
      <Image
        src={imagePath}
        alt={clean.name}
        className="absolute bottom-0 left-0 object-contain"
        width={1316}
        height={391}
      />
    </Card>
  );
};
