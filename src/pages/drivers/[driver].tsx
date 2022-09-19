import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "../../components/Layout";
import { Drivers } from "../../components/Drivers";
import { Driver } from "../../components/Driver";
import { driverStandings } from "../../utils/mock";
import { getDriversWithTeam } from "../../utils/helpers";

const DriverPage: NextPage = () => {
  const router = useRouter();
  const { driver } = router.query;

  if (driver) {
    const [name, lastname] = (driver as string).split("-");

    const drivers = getDriversWithTeam(driverStandings);
    const driverData = drivers.find(
      (driver) =>
        name === driver.givenName.toLowerCase() &&
        lastname === driver.familyName.toLowerCase()
    );

    if (name && lastname && driverData !== undefined) {
      return (
        <Layout>
          <Drivers />
          <Driver
            name={name}
            lastname={lastname}
            team={driverData.team}
            permanentNumber={Number.parseInt(driverData.permanentNumber)}
            nationality={driverData.nationality}
          />
        </Layout>
      );
    }
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default DriverPage;
