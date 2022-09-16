import type { NextPage } from "next";
// import Head from "next/head";
import { Sidebar } from "../components/Sidebar";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return <Sidebar />;
};

export default Home;
