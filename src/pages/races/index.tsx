import { GetStaticPropsResult, InferGetStaticPropsType } from "next";

import { AppLayout } from "@layouts/AppLayout";

import { Races } from "@components/Cards";
import { RequiredAction } from "@components/RequiredAction";
import { getRaces } from "@utils/services";
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
  const races = await getRaces();

  return {
    props: {
      races
    },
    revalidate: 60
  };
}
