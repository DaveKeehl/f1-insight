import Image from "next/image";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-brand-blue-400 flex flex-col items-center gap-10 px-4 pt-12 pb-8 md:pb-16 text-brand-white-100 lg:px-14 flex-auto relative">
      <Image src="/f1-logo.svg" alt="Formula 1 logo" width={120} height={30} />
      {children}
    </div>
  );
}
