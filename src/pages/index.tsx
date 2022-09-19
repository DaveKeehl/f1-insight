import type { NextPage } from "next";
// import Head from "next/head";
import { Races } from "../components/Races";
import { Driver } from "../components/Driver";
import { Layout } from "../components/Layout";
import { Drivers } from "../components/Drivers";
import { Teams } from "../components/Teams";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <Layout>
      {/* <Races /> */}
      {/* <Drivers /> */}
      <Teams />
      <Driver name="Max" lastname="Verstappen" team="Red Bull" />
    </Layout>
  );
};

export default Home;
