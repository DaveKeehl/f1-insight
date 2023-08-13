"use client";

import { IDriverWithTeam } from "@/utils/types/driver";

import DriverCard from "@/components/DriverCard";
import Cards from "@/components/Cards";

interface IDrivers {
  drivers: IDriverWithTeam[];
}

export default function DriverCards({ drivers }: IDrivers) {
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
}
