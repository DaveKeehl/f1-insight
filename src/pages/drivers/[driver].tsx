import * as cheerio from "cheerio";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType
} from "next";

import { ActorLayout } from "@layouts/ActorLayout";
import { PageLayout } from "@layouts/PageLayout";

import { Drivers } from "@components/Cards";
import { DriverBadge } from "@components/DriverBadge";
import { DriverImage } from "@components/DriverImage";
import { DriverInfoDialog } from "@components/InfoDialog";
import { DriverLineChart } from "@components/LineChart";

import { DRIVER_THAT_NEVER_MISSED_A_RACE } from "@utils/constants";
import { getDriversWithTeam } from "@utils/helpers";
import {
  collectDriverCareerInfoData,
  getDriverWikiData
} from "@utils/scraping";
import {
  getDriverQualifyingResults,
  getDriverRaceResults,
  getDriverStandings
} from "@utils/services";
import { IDriverCareerInfo, IDriverWithTeam } from "@utils/types/driver";
import { QualifyingResult, RaceResult } from "@utils/types/race";

const Driver = ({
  givenName,
  familyName,
  permanentNumber,
  nationality
}: IDriverWithTeam) => (
  <div className="relative h-96 md:h-80 lg:h-[480px] xl:h-[525px]">
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
  qualifyingResults,
  races,
  driverCareerInfo
}: {
  driverWithTeam: IDriverWithTeam;
  raceResults: RaceResult[];
  qualifyingResults: QualifyingResult[];
  races: { round: string; country: string }[];
  driverCareerInfo: IDriverCareerInfo;
}) => {
  const clean = {
    team: driverWithTeam.team.toLowerCase().replace(/\s/g, "")
  };

  return (
    <ActorLayout
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
};

export default function DriverPage({
  drivers,
  driverData,
  qualifyingResults,
  raceResults,
  races,
  driverCareerInfo
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout
      headTitle={`F1 Insights - ${driverData.givenName} ${driverData.familyName}`}
      side={<Drivers drivers={drivers} />}
      title={`${driverData.givenName} ${driverData.familyName}`}
      subtitle={driverData.team}
      body={
        <DriverData
          driverWithTeam={driverData}
          raceResults={raceResults}
          qualifyingResults={qualifyingResults}
          races={races}
          driverCareerInfo={driverCareerInfo}
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
    races: { round: string; country: string }[];
    driverCareerInfo: IDriverCareerInfo;
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

  const driverWikiData = await getDriverWikiData(driverData.url);

  return {
    props: {
      drivers,
      driverData,
      raceResults,
      qualifyingResults,
      races: (await getDriverRaceResults(DRIVER_THAT_NEVER_MISSED_A_RACE)).map(
        (raceResult) => ({
          round: raceResult.round,
          country: raceResult.Circuit.Location.country
        })
      ),
      driverCareerInfo: collectDriverCareerInfoData(driverData, driverWikiData)
    },
    revalidate: 60
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
