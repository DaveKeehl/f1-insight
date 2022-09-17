import type { NextPage } from "next";
// import Head from "next/head";
import { Sidebar } from "../components/Sidebar";
import { Races } from "../components/Races";
import { Driver } from "../components/Driver";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <Races />
      <Driver name="Charles" lastname="Leclerc" team="Ferrari" />
    </main>
  );
};

export default Home;
