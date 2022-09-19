import { DriverCard } from "../DriverCard";

export const Drivers = () => {
  return (
    <aside className="flex flex-col gap-3 overflow-scroll bg-brand-blue-300 p-5">
      <DriverCard driverNumber={1} name="Max" lastname="Verstappen" />
      <DriverCard driverNumber={16} name="Charles" lastname="Leclerc" />
      <DriverCard driverNumber={11} name="Sergio" lastname="Perez" />
      <DriverCard driverNumber={44} name="Lewis" lastname="Hamilton" />
      <DriverCard driverNumber={55} name="Carlos" lastname="Sainz" />
      <DriverCard driverNumber={63} name="George" lastname="Russell" />
      <DriverCard driverNumber={4} name="Lando" lastname="Norris" />
      <DriverCard driverNumber={10} name="Pierre" lastname="Gasly" />
      <DriverCard driverNumber={5} name="Sebastian" lastname="Vettel" />
      <DriverCard driverNumber={31} name="Esteban" lastname="Ocon" />
    </aside>
  );
};
