import DriverBadge from "@/components/DriverBadge";
import DriverImage from "@/components/DriverImage";

import { getDriverWithConstructor } from "@/db/drivers/queries";

export default function Driver(
  driver: Awaited<ReturnType<typeof getDriverWithConstructor>>[number]
) {
  return (
    <div className="relative h-96 md:h-80 lg:h-[480px] xl:h-[525px]">
      <DriverBadge
        number={driver.number?.toString() ?? ""}
        nationality={driver.nationality ?? ""}
        className="absolute left-6 top-6"
      />
      <DriverImage givenName={driver.forename} familyName={driver.surname} />
    </div>
  );
}
