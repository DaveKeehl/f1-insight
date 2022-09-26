import type {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType
} from "next";

import { PageLayout } from "@layouts/PageLayout";
import { ActorLayout } from "@layouts/ActorLayout";

import { Drivers } from "@components/Cards";
import { DriverBadge } from "@components/DriverBadge";
import { LineChart } from "@components/LineChart";
import { DriverInfoDialog } from "@components/InfoDialog";
import { DriverImage } from "@components/DriverImage";

import { getDriversWithTeam } from "@utils/helpers";
import { IDriverWithTeam } from "@utils/types/driver";
import {
  getDriverQualifyingResults,
  getDriverRaceResults,
  getDriverStandings
} from "@utils/services";
import { QualifyingResult, RaceResult } from "@utils/types/race";

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

const DriverData = ({
  driverWithTeam,
  raceResults,
  qualifyingResults
}: {
  driverWithTeam: IDriverWithTeam;
  raceResults: RaceResult[];
  qualifyingResults: QualifyingResult[];
}) => {
  const clean = {
    team: driverWithTeam.team.toLowerCase().replace(/\s/g, "")
  };

  return (
    <ActorLayout
      team={clean.team}
      infoDialog={<DriverInfoDialog />}
      drivers={<Driver {...driverWithTeam} />}
      chart={
        <LineChart
          data={[
            {
              id: "Race",
              data: raceResults.map((race) => ({
                x: `${race.round} - ${race.Circuit.Location.country}`,
                y: Number.parseInt(race.Results[0]?.position || "0")
              }))
            },
            {
              id: "Qualifying",
              data: qualifyingResults.map((race) => ({
                x: `${race.round} - ${race.Circuit.Location.country}`,
                y: Number.parseInt(race.QualifyingResults[0]?.position || "0")
              }))
            }
          ]}
          team={driverWithTeam.team}
          minY={1}
          maxY="auto"
          legendX="Race"
          legendY="Position"
        />
      }
    />
  );
};

export default function DriverPage({
  drivers,
  driverData,
  qualifyingResults,
  raceResults
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout
      side={<Drivers drivers={drivers} />}
      title={`${driverData.givenName} ${driverData.familyName}`}
      subtitle={driverData.team}
      body={
        <DriverData
          driverWithTeam={driverData}
          raceResults={raceResults}
          qualifyingResults={qualifyingResults}
        />
      }
    />
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ driver: string }>
): Promise<
  GetStaticPropsResult<{
    drivers: IDriverWithTeam[];
    driverData: IDriverWithTeam;
    raceResults: RaceResult[];
    qualifyingResults: QualifyingResult[];
  }>
> {
  const driverStandings = await getDriverStandings();
  const drivers = getDriversWithTeam(driverStandings);

  const driver = context.params?.driver as string;
  const givenName = driver.split("-")[0];
  const familyName = driver.split("-").slice(1).join(" ");

  const driverData = drivers.find(
    (driver) =>
      givenName === driver.givenName.toLowerCase() &&
      familyName === driver.familyName.toLowerCase()
  );

  if (!driverData) {
    return {
      notFound: true
    };
  }

  const raceResults = await getDriverRaceResults(driverData.driverId);
  const qualifyingResults = await getDriverQualifyingResults(
    driverData.driverId
  );

  return {
    props: {
      drivers,
      driverData,
      raceResults,
      qualifyingResults
    },
    revalidate: 1
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const driverStandings = await getDriverStandings();
  const drivers = getDriversWithTeam(driverStandings);

  return {
    paths: drivers.map((driver) => {
      const givenName = driver.givenName.toLowerCase();
      const familyName = driver.familyName.toLowerCase();

      return {
        params: {
          driver: `${givenName}-${familyName.split(" ").join("-")}`
        }
      };
    }),
    fallback: false
  };
};
