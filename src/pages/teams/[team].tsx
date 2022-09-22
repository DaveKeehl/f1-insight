import type { NextPage } from "next";
import { useRouter } from "next/router";
import { capitalize } from "lodash";

import { Layout } from "../../components/Layout";
import { Teams } from "../../components/Teams";
import { Team } from "../../components/Team";

const TeamPage: NextPage = () => {
  const router = useRouter();
  const { team } = router.query;

  if (team) {
    const clean = {
      team: (team as string)
        .split("-")
        .map((e) => capitalize(e))
        .join(" "),
    };

    if (team) {
      return (
        <Layout>
          <Teams />
          <Team name={clean.team} />
        </Layout>
      );
    }
  }

  return <div className="h-screen w-screen bg-brand-blue-400" />;
};

export default TeamPage;
