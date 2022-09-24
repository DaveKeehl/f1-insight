import type { NextPage } from "next";

import { AppLayout } from "@layouts/AppLayout";

import { Races } from "@components/Races";
import { RequiredAction } from "@components/RequiredAction";

const RacesPage: NextPage = () => {
  return (
    <AppLayout>
      <Races />
      <RequiredAction message="Please choose a race" />
    </AppLayout>
  );
};

export default RacesPage;
