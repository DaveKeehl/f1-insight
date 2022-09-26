import { GetStaticPropsResult, InferGetStaticPropsType } from "next";

import { AppLayout } from "@layouts/AppLayout";

import { Races } from "@components/Cards";
import { RequiredAction } from "@components/RequiredAction";
import { getDriverRaceResults, getRaces } from "@utils/services";
import { RaceSchedule } from "@utils/types/race";

export default function RacesPage({
  races
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <AppLayout>
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
  const driverRaceResults = await getDriverRaceResults("max_verstappen");
  const races = (await getRaces()).slice(0, driverRaceResults.length);

  return {
    props: {
      races
    },
    revalidate: 60
  };
}
