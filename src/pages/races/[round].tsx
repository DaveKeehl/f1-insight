import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "../../components/Layout";
import { Races } from "../../components/Races";
import { Race } from "../../components/Race";
import { raceResult, qualifyingResult } from "../../utils/mock";
import { getPrettyDate } from "../../utils/helpers";

const RacePage: NextPage = () => {
  const router = useRouter();
  const { round } = router.query; // use round to fetch data

  if (raceResult[0] && qualifyingResult[0]) {
    const { Circuit, date, Results: RaceResults } = raceResult[0];
    const { QualifyingResults } = qualifyingResult[0];

    return (
      <Layout>
        <Races />
        <Race
          circuitId={Circuit.circuitId}
          country={Circuit.Location.country}
          date={getPrettyDate(date)}
          results={{
            race: RaceResults,
            qualifying: QualifyingResults
          }}
        />
      </Layout>
    );
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default RacePage;
