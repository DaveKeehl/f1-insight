import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "../../components/Layout";
import { Drivers } from "../../components/Drivers";
import { Driver } from "../../components/Driver";
import { useSetAtom } from "jotai";
import { selectedDriverAtom } from "../../utils/atoms";

const DriverPage: NextPage = () => {
  const router = useRouter();
  const { driver } = router.query;

  console.log(driver);

  if (driver) {
    const [name, lastname] = (driver as string).split("-");

    console.log(name, lastname);

    if (name && lastname) {
      return (
        <Layout>
          <Drivers />
          <Driver name={name} lastname={lastname} team="Red Bull" />
        </Layout>
      );
    }
  }

  return <div>Invalid driver page</div>;
};

export default DriverPage;
