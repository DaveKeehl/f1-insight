import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface IDriverBadge {
  number: string;
  nationality: string;
  className?: string;
}

export default function DriverBadge({
  number: permanentNumber,
  nationality,
  className = ""
}: IDriverBadge) {
  return (
    <div
      className={twMerge(
        "flex w-fit items-center gap-[10px] rounded-full border-[2px] border-brand-blue-200 bg-brand-blue-300 px-[18px] py-[10px]",
        className
      )}
    >
      <p className="text-xl">{permanentNumber}</p>
      <Image
        src={`/flags/${nationality}.jpeg`}
        alt={`${nationality} flag`}
        width={30}
        height={20}
        className="h-5 rounded-md"
      />
    </div>
  );
}
