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
import { DRIVER_THAT_NEVER_MISSED_A_RACE } from "@utils/constants";

const Driver = ({
  givenName,
  familyName,
  permanentNumber,
  nationality
}: IDriverWithTeam) => (
  <div className="relative md:h-[360px] lg:h-[480px] xl:h-[525px]">
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
  races
}: {
  driverWithTeam: IDriverWithTeam;
  raceResults: RaceResult[];
  qualifyingResults: QualifyingResult[];
  races: { round: string; country: string }[];
}) => {
  const clean = {
    team: driverWithTeam.team.toLowerCase().replace(/\s/g, "")
  };

  return (
    <ActorLayout
      actor="driver"
      team={clean.team}
      infoDialog={<DriverInfoDialog />}
      drivers={<Driver {...driverWithTeam} />}
      chart={
        <LineChart
          data={[
            {
              id: "Race",
              data: races.map((race) => {
                const correspondingRaceResult = raceResults.find(
                  (raceResult) => raceResult.round === race.round
                );
                return {
                  x: `${race.round} - ${race.country}`,
                  y:
                    Number.parseInt(
                      correspondingRaceResult?.Results[0]?.position as string
                    ) || null
                };
              })
            },
            {
              id: "Qualifying",
              data: races.map((race) => {
                const correspondingQualifyingResult = qualifyingResults.find(
                  (raceResult) => raceResult.round === race.round
                );
                return {
                  x: `${race.round} - ${race.country}`,
                  y:
                    Number.parseInt(
                      correspondingQualifyingResult?.QualifyingResults[0]
                        ?.position as string
                    ) || null
                };
              })
            }
          ]}
          team={driverWithTeam.team}
          minY={1}
          maxY={20}
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
  raceResults,
  races
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
          races={races}
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
      qualifyingResults,
      races: (await getDriverRaceResults(DRIVER_THAT_NEVER_MISSED_A_RACE)).map(
        (raceResult) => ({
          round: raceResult.round,
          country: raceResult.Circuit.Location.country
        })
      )
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
