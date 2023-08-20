import Actor from "@/components/Actor";
import DriverInfoDialog from "@/components/DriverInfoDialog";
import DriverLineChart from "@/components/DriverLineChart";
import Driver from "@/components/Driver";

import { getDriverWithConstructor } from "@/db/drivers/queries";
import { IDriverCareerInfo } from "@/utils/types/driver";
import { QualifyingResult, RaceResult } from "@/utils/types/race";

export default function DriverData({
  driver,
  raceResults,
  qualifyingResults,
  races,
  driverCareerInfo
}: {
  driver: Awaited<ReturnType<typeof getDriverWithConstructor>>[number];
  raceResults: RaceResult[];
  qualifyingResults: QualifyingResult[];
  races: { round: string; country: string }[];
  driverCareerInfo: IDriverCareerInfo;
}) {
  const clean = {
    team: driver.constructorName?.toLowerCase().replace(/\s/g, "") ?? ""
  };

  return (
    <Actor
      actor="driver"
      team={clean.team}
      infoDialog={<DriverInfoDialog data={driverCareerInfo} />}
      drivers={<Driver {...driver} />}
      chart={
        <DriverLineChart
          races={races}
          raceResults={raceResults}
          qualifyingResults={qualifyingResults}
          driverWithTeam={driver}
        />
      }
    />
  );
}
