import { v4 as uuidv4 } from "uuid";

import { DriverCard } from "../Card";
import { Cards } from "./Cards";

import { getDriversWithTeam } from "@utils/helpers";
import { driverStandings } from "@utils/mock";

export const Drivers = () => {
  const drivers = getDriversWithTeam(driverStandings);

  return (
    <Cards
      data={drivers}
      renderCard={(driver) => (
        <DriverCard
          // key={uuidv4()}
          driverNumber={Number.parseInt(driver.permanentNumber)}
          name={driver.givenName}
          lastname={driver.familyName}
        />
      )}
    />
  );
};
