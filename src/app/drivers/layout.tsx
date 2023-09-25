import DriverCards from "@/components/DriverCards";

import { getAllCurrentDrivers } from "@/db/drivers/queries";

export default async function DriverLayout({ children }: { children: React.ReactNode }) {
  const allCurrentDrivers = await getAllCurrentDrivers();

  return (
    <div className="flex w-full">
      <DriverCards drivers={allCurrentDrivers} />
      {children}
    </div>
  );
}
