import type { NextPage } from "next";

import { AppLayout } from "@layouts/AppLayout";

import { Drivers } from "@components/Drivers";
import { RequiredAction } from "@components/RequiredAction";

const DriversPage: NextPage = () => {
  return (
    <AppLayout>
      <Drivers />
      <RequiredAction message="Please choose a driver" />
    </AppLayout>
  );
};

export default DriversPage;
