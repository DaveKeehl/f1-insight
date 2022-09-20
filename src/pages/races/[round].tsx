import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "../../components/Layout";
import { Drivers } from "../../components/Drivers";
import { Race } from "../../components/Race";
import { raceResult } from "../../utils/mock";

const RacePage: NextPage = () => {
  const router = useRouter();
  const { round } = router.query;

  if (round) {
    return (
      <Layout>
        <Drivers />
        <Race />
      </Layout>
    );
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default RacePage;
