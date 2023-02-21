import Image from "next/image";

interface IDriverImage {
  givenName: string;
  familyName: string;
}

export const DriverImage = ({ givenName, familyName }: IDriverImage) => {
  const clean = {
    familyName: familyName.split(" ").join("-")
  };

  return (
    <>
      <div className="absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-b from-transparent to-brand-blue-400" />
      <Image
        src={`/drivers/front/${givenName.toLowerCase()}-${clean.familyName.toLowerCase()}.jpeg`}
        alt={`${givenName} ${familyName}`}
        width={1920}
        height={1920}
        className="h-full w-full flex-none object-cover object-top"
        priority={true}
      />
    </>
  );
};
