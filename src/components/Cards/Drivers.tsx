import { IDriverWithTeam } from "@utils/types/driver";

import { DriverCard } from "../Card";
import { Cards } from "./Cards";

interface IDrivers {
  drivers: IDriverWithTeam[];
}

export const Drivers = ({ drivers }: IDrivers) => {
  return (
    <Cards
      data={drivers}
      keyExtractor={(driver) => driver.driverId}
      renderCard={(driver) => (
        <DriverCard
          givenName={driver.givenName}
          familyName={driver.familyName}
          permanentNumber={driver.permanentNumber}
        />
      )}
    />
  );
};
