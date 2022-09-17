import Image from "next/future/image";

interface IDriverBadge {
  number: number;
  country: string;
  className?: string;
}

export const DriverBadge = ({
  number,
  country,
  className = "",
}: IDriverBadge) => {
  return (
    <div
      className={`${className} flex items-center gap-[10px] rounded-full border-[2px] border-brand-blue-200 bg-brand-blue-300 px-[18px] py-[10px]`.trim()}
    >
      <p className="text-xl">{number}</p>
      <Image
        src={`/flags/${country}.jpeg`}
        alt=""
        width={30}
        height={20}
        className="h-5 rounded-md"
      />
    </div>
  );
};
