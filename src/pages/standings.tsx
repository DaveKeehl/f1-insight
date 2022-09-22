import type { NextPage } from "next";

import { Layout } from "../components/Layout";
import { driverStandings, constructorStandings } from "../utils/mock";
import { Standings } from "../components/Standings";

const StandingsPage: NextPage = () => {
  return (
    <Layout>
      <Standings
        drivers={driverStandings}
        constructors={constructorStandings}
      />
    </Layout>
  );
};

export default StandingsPage;
