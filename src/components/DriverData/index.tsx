import Actor from "@/components/Actor";
import DriverInfoDialog from "@/components/DriverInfoDialog";
import DriverLineChart from "@/components/DriverLineChart";
import Driver from "@/components/Driver";

import { getDriverWithConstructor } from "@/db/drivers/queries";
import { IDriverCareerInfo } from "@/utils/types/driver";
import { getDriverRaceResults } from "@/db/results/queries";
import { getDriverQualifyingResults } from "@/db/qualifying/queries";

export default function DriverData({
  driver,
  raceResults,
  qualifyingResults,
  races,
  driverCareerInfo
}: {
  driver: Awaited<ReturnType<typeof getDriverWithConstructor>>[number];
  raceResults: Awaited<ReturnType<typeof getDriverRaceResults>>;
  qualifyingResults: Awaited<ReturnType<typeof getDriverQualifyingResults>>;
  races: { round: number; country: string }[];
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
