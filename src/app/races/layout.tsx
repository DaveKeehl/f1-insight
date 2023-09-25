import RaceCards from "@/components/RaceCards";

import { getAllCurrentRaces } from "@/db/races/queries";

export default async function RaceLayout({ children }: { children: React.ReactNode }) {
  const allCurrentRaces = await getAllCurrentRaces();

  return (
    <div className="flex w-full">
      <RaceCards races={allCurrentRaces} />
      {children}
    </div>
  );
}
