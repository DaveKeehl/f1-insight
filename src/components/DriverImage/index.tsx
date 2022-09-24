import Image from "next/future/image";

interface IDriverImage {
  givenName: string;
  familyName: string;
}

export const DriverImage = ({ givenName, familyName }: IDriverImage) => {
  return (
    <>
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-brand-blue-400" />
      <Image
        src={`/drivers/front/${givenName}-${familyName}.jpeg`}
        alt=""
        width={1920}
        height={1920}
        className="h-full w-full flex-none object-cover object-top"
      />
    </>
  );
};
