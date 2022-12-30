import { GetStaticPropsResult, InferGetStaticPropsType } from "next";

import { AppLayout } from "@layouts/AppLayout";

import { Races } from "@components/Cards";
import { RequiredAction } from "@components/RequiredAction";

import { DRIVER_THAT_NEVER_MISSED_A_RACE } from "@utils/constants";
import { getDriverRaceResults, getRacesSchedule } from "@utils/services";
import { RaceSchedule } from "@utils/types/race";

export default function RacesPage({
  races
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <AppLayout headTitle="F1 Insights - Races">
      <Races races={races} />
      <RequiredAction message="Please choose a race" />
    </AppLayout>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    races: RaceSchedule[];
  }>
> {
  console.log("--------------");

  const driverRaceResults = await getDriverRaceResults(
    DRIVER_THAT_NEVER_MISSED_A_RACE
  );
  const races = (await getRacesSchedule()).slice(0, driverRaceResults.length);

  return {
    props: {
      races
    }
  };
}
