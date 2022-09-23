import type { NextPage } from "next";
import { useRouter } from "next/router";
import { capitalize } from "lodash";

import { Layout } from "../../components/Layout";
import { Teams } from "../../components/Teams";
import { Team } from "../../components/Team";
import { driverStandings, drivers } from "../../utils/mock";
import { getDriversWithTeam } from "../../utils/helpers";
import { Driver } from "../../utils/types/driver";

const TeamPage: NextPage = () => {
  const router = useRouter();
  const { team } = router.query;

  if (team) {
    const clean = {
      team: (team as string)
        .split("-")
        .map((e) => capitalize(e))
        .join(" ")
    };

    const teamDrivers = getDriversWithTeam(driverStandings)
      .filter((driver) => driver.team === clean.team)
      .map((driver) => {
        const driverData = drivers.find(
          (d) => d.driverId === driver.driverId
        ) as Driver;

        return {
          name: driverData?.givenName,
          lastname: driverData?.familyName,
          permanentNumber: driverData?.permanentNumber,
          nationality: driverData?.nationality
        };
      });

    if (team) {
      return (
        <Layout>
          <Teams />
          <Team name={clean.team} drivers={teamDrivers} />
        </Layout>
      );
    }
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default TeamPage;
