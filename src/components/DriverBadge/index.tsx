import Image from "next/future/image";

interface IDriverBadge {
  permanentNumber: string;
  nationality: string;
  className?: string;
}

export const DriverBadge = ({
  permanentNumber,
  nationality,
  className = ""
}: IDriverBadge) => {
  return (
    <div
      className={`${className} flex w-fit items-center gap-[10px] rounded-full border-[2px] border-brand-blue-200 bg-brand-blue-300 px-[18px] py-[10px]`.trim()}
    >
      <p className="text-xl">{permanentNumber}</p>
      <Image
        src={`/flags/${nationality}.jpeg`}
        alt=""
        width={30}
        height={20}
        className="h-5 rounded-md"
      />
    </div>
  );
};
