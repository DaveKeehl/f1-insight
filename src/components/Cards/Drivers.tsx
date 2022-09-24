import { DriverCard } from "../Card";
import { Cards } from "./Cards";

import { getDriversWithTeam } from "@utils/helpers";
import { driverStandings } from "@utils/mock";

export const Drivers = () => {
  const drivers = getDriversWithTeam(driverStandings);

  return (
    <Cards
      data={drivers}
      keyExtractor={(driver) => driver.driverId}
      renderCard={(driver) => (
        <DriverCard
          driverNumber={Number.parseInt(driver.permanentNumber)}
          name={driver.givenName}
          lastname={driver.familyName}
        />
      )}
    />
  );
};
