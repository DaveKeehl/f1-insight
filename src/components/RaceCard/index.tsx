import Image from "next/future/image";
import { capitalize } from "lodash";

interface IRaceCard {
  round: number;
  circuitId: string;
  country: string;
  year: string;
  date: string;
}

interface ILabel {
  text: string;
  className?: string;
}

const Label = ({ text, className }: ILabel) => {
  return (
    <div
      className={`${className} rounded-full border border-brand-blue-300 bg-brand-blue-400 px-[10px] py-1 text-xs`.trim()}
    >
      {text}
    </div>
  );
};

const Backdrop = () => {
  return <div className="absolute z-10 h-full w-full bg-brand-blue-400/60" />;
};

export const RaceCard = ({ round, circuitId, country, date }: IRaceCard) => {
  const corrections: { [key: string]: string } = {
    UK: "Great Britain",
    UAE: "Abu Dhabi",
    USA: "United States",
  };

  const clean = {
    round: String(round).padStart(2, "0"),
    circuitId: circuitId
      .split("_")
      .map((e) => capitalize(e))
      .join(" "),
    country: (corrections[country] || country)
      .toLowerCase()
      .replace(/\s/g, "-"),
  };
  const imagePath = `/races/${clean.round}-${clean.country}.jpeg`;

  return (
    <div className="relative flex h-36 w-64 flex-none flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl p-5 text-center text-brand-white-100 hover:cursor-pointer">
      <div className="z-20 drop-shadow-card-text-md">
        <h1 className="text-[22px] font-medium">{clean.circuitId}</h1>
        <h2 className="text-sm font-medium uppercase">
          {corrections[country] || country}
        </h2>
      </div>
      <Label text={date} className="z-20" />
      <Backdrop />
      <Image src={imagePath} alt="" className="object-cover" fill />
    </div>
  );
};
