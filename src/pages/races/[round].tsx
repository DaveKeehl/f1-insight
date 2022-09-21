import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "../../components/Layout";
import { Races } from "../../components/Races";
import { Race } from "../../components/Race";
import { raceResult } from "../../utils/mock";
import { getPrettyDate } from "../../utils/helpers";

const RacePage: NextPage = () => {
  const router = useRouter();
  const { round } = router.query; // use round to fetch data

  if (raceResult[0]) {
    const { Circuit, date, Results } = raceResult[0];

    return (
      <Layout>
        <Races />
        <Race
          circuitId={Circuit.circuitId}
          country={Circuit.Location.country}
          date={getPrettyDate(date)}
          results={Results}
        />
      </Layout>
    );
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default RacePage;
