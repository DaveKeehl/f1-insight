"use client";

import DriverCard from "@/components/DriverCard";
import Cards from "@/components/Cards";
import { getAllCurrentDrivers } from "@/db/drivers/queries";

interface IDrivers {
  drivers: Awaited<ReturnType<typeof getAllCurrentDrivers>>;
}

export default function DriverCards({ drivers }: IDrivers) {
  return (
    <Cards
      data={drivers}
      keyExtractor={(driver) => driver.driverId.toString()}
      renderCard={(driver) => <DriverCard {...driver} />}
    />
  );
}
