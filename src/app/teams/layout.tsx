import TeamCards from "@/components/TeamCards";

import { getAllCurrentConstructors } from "@/db/constructors/queries";

export default async function TeamLayout({ children }: { children: React.ReactNode }) {
  const allCurrentConstructors = await getAllCurrentConstructors();

  return (
    <div className="flex w-full">
      <TeamCards teams={allCurrentConstructors} />
      {children}
    </div>
  );
}
