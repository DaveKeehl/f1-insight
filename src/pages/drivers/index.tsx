import { GetStaticPropsResult, InferGetStaticPropsType } from "next";

import { AppLayout } from "@layouts/AppLayout";

import { Drivers } from "@components/Cards";
import { RequiredAction } from "@components/RequiredAction";

import { getDriversWithTeam } from "@utils/helpers";
import { getDriverStandings } from "@utils/services";
import { IDriverWithTeam } from "@utils/types/driver";

export default function DriversPage({
  drivers
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <AppLayout headTitle="Drivers">
      <Drivers drivers={drivers} />
      <RequiredAction message="Please choose a driver" />
    </AppLayout>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    drivers: IDriverWithTeam[];
  }>
> {
  const driverStandings = await getDriverStandings();
  const drivers = getDriversWithTeam(driverStandings);

  return {
    props: {
      drivers
    },
    revalidate: 60
  };
}
