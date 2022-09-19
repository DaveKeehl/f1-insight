import type { NextPage } from "next";

import { Layout } from "../../components/Layout";
import { Drivers } from "../../components/Drivers";

const DriversPage: NextPage = () => {
  return (
    <Layout>
      <Drivers />
      <div className="flex flex-auto flex-col items-center justify-center bg-brand-blue-400 text-brand-white-100">
        <h1 className="text-3xl font-medium">Please choose a driver</h1>
      </div>
    </Layout>
  );
};

export default DriversPage;
