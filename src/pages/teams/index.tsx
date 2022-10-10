import type { GetStaticPropsResult, InferGetStaticPropsType } from "next";

import { AppLayout } from "@layouts/AppLayout";

import { Teams } from "@components/Cards";
import { RequiredAction } from "@components/RequiredAction";

import { getTeams } from "@utils/services";
import { Constructor } from "@utils/types/constructor";

export default function RacesPage({
  teams
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <AppLayout headTitle="F1 Insights - Teams">
      <Teams teams={teams} />
      <RequiredAction message="Please choose a team" />
    </AppLayout>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    teams: Constructor[];
  }>
> {
  const teams = await getTeams();

  return {
    props: {
      teams
    }
  };
}
