import Image from "next/future/image";

interface IRaceCard {
  raceNumber: number;
  circuit: string;
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

export const RaceCard = ({ raceNumber, circuit, year, date }: IRaceCard) => {
  const clean = {
    raceNumber: String(raceNumber).padStart(2, "0"),
    circuit: circuit.toLowerCase(),
  };
  const imagePath = `/races/${clean.raceNumber}-${clean.circuit}.jpeg`;

  return (
    <div className="relative flex w-64 flex-none flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl p-5 text-center text-brand-white-100">
      <div className="z-20">
        <h1 className="text-[22px] font-medium uppercase">{circuit}</h1>
        <h2 className="text-base font-medium">{year}</h2>
      </div>
      <Label text={date} className="z-20" />
      <Backdrop />
      <Image src={imagePath} alt="" className="object-cover" fill />
    </div>
  );
};
