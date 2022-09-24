import { DriverCard } from "../DriverCard";

import { getDriversWithTeam } from "@utils/helpers";
import { driverStandings } from "@utils/mock";

export const Drivers = () => {
  const drivers = getDriversWithTeam(driverStandings);

  return (
    <aside className="flex flex-col gap-3 overflow-scroll bg-brand-blue-300 p-5">
      {drivers.map((driver) => (
        <DriverCard
          key={driver.driverId}
          driverNumber={Number.parseInt(driver.permanentNumber)}
          name={driver.givenName}
          lastname={driver.familyName}
        />
      ))}
    </aside>
  );
};
