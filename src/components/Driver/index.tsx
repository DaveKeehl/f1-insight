import DriverBadge from "@/components/DriverBadge";

import { IDriverWithTeam } from "@/utils/types/driver";
import DriverImage from "@/components/DriverImage";

export default function Driver({
  givenName,
  familyName,
  permanentNumber,
  nationality
}: IDriverWithTeam) {
  return (
    <div className="relative h-96 md:h-80 lg:h-[480px] xl:h-[525px]">
      <DriverBadge
        permanentNumber={permanentNumber}
        nationality={nationality}
        className="absolute left-6 top-6"
      />
      <DriverImage givenName={givenName} familyName={familyName} />
    </div>
  );
}
