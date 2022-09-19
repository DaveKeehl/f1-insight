import Image from "next/future/image";
import Link from "next/link";

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
    lastname: lastname.toLowerCase().replace(/\s/g, "-"),
  };
  const imagePath = `/drivers/side/${clean.name}-${clean.lastname}.png`;

  return (
    <Link href={`/drivers/${clean.name}-${clean.lastname}`}>
      <div className="relative flex h-36 w-64 flex-none flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-tr from-brand-white-300 to-brand-white-200 p-4 text-brand-white-100 hover:cursor-pointer">
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
          alt=""
          className="absolute top-0 -right-7 aspect-square w-48"
          width={412}
          height={412}
        />
      </div>
    </Link>
  );
};
