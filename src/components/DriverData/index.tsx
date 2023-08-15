import { IDriverCareerInfo, IDriverWithTeam } from "@/utils/types/driver";
import { QualifyingResult, RaceResult } from "@/utils/types/race";

import Actor from "@/components/Actor";
import DriverInfoDialog from "@/components/DriverInfoDialog";
import DriverLineChart from "@/components/DriverLineChart";
import Driver from "@/components/Driver";

export default function DriverData({
  driverWithTeam,
  raceResults,
  qualifyingResults,
  races,
  driverCareerInfo
}: {
  driverWithTeam: IDriverWithTeam;
  raceResults: RaceResult[];
  qualifyingResults: QualifyingResult[];
  races: { round: string; country: string }[];
  driverCareerInfo: IDriverCareerInfo;
}) {
  const clean = {
    team: driverWithTeam.team.toLowerCase().replace(/\s/g, "")
  };

  return (
    <Actor
      actor="driver"
      team={clean.team}
      infoDialog={<DriverInfoDialog data={driverCareerInfo} />}
      drivers={<Driver {...driverWithTeam} />}
      chart={
        <DriverLineChart
          races={races}
          raceResults={raceResults}
          qualifyingResults={qualifyingResults}
          driverWithTeam={driverWithTeam}
        />
      }
    />
  );
}
