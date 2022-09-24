import type { NextPage } from "next";
import { useRouter } from "next/router";
import { capitalize } from "lodash";

import { PageLayout } from "@layouts/PageLayout";
import { ActorLayout } from "@layouts/ActorLayout";

import { Drivers } from "@components/Drivers";
import { DriverBadge } from "@components/DriverBadge";
import { LineChart } from "@components/LineChart";

import {
  driverStandings,
  verstappenQualifyingResults,
  verstappenRaceResults
} from "@utils/mock";
import { getDriversWithTeam } from "@utils/helpers";
import { InfoDialog } from "@components/InfoDialog";
import { DriverImage } from "@components/DriverImage";
import { IDriverWithTeam } from "@utils/types/driver";

const Driver = ({
  givenName,
  familyName,
  permanentNumber,
  nationality
}: IDriverWithTeam) => (
  <div className="relative h-[525px] w-[788px]">
    <DriverBadge
      permanentNumber={permanentNumber}
      nationality={nationality}
      className="absolute top-6 left-6"
    />
    <DriverImage givenName={givenName} familyName={familyName} />
  </div>
);

const DriverData = (props: IDriverWithTeam) => {
  const clean = {
    team: props.team.toLowerCase().replace(/\s/g, "")
  };

  return (
    <ActorLayout
      team={clean.team}
      infoDialog={<InfoDialog />}
      drivers={<Driver {...props} />}
      chart={
        <LineChart
          data={[
            {
              id: "Race",
              data: verstappenRaceResults.map((race) => ({
                x: `${race.round} - ${race.Circuit.Location.country}`,
                y: Number.parseInt(race.Results[0]?.position || "0")
              }))
            },
            {
              id: "Qualifying",
              data: verstappenQualifyingResults.map((race) => ({
                x: `${race.round} - ${race.Circuit.Location.country}`,
                y: Number.parseInt(race.QualifyingResults[0]?.position || "0")
              }))
            }
          ]}
          team={props.team}
        />
      }
    />
  );
};

const DriverPage: NextPage = () => {
  const router = useRouter();
  const { driver } = router.query;

  if (driver) {
    const [givenName, familyName] = (driver as string).split("-");

    const drivers = getDriversWithTeam(driverStandings);

    const driverData = drivers.find(
      (driver) =>
        givenName === driver.givenName.toLowerCase() &&
        familyName === driver.familyName.toLowerCase()
    );

    if (givenName && familyName && driverData) {
      return (
        <PageLayout
          side={<Drivers />}
          title={`${capitalize(givenName)} ${capitalize(familyName)}`}
          subtitle={driverData.team}
          body={<DriverData {...driverData} />}
        />
      );
    }
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default DriverPage;
