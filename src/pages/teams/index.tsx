import type { NextPage } from "next";

import { AppLayout } from "@layouts/AppLayout";

import { Teams } from "@components/Cards";
import { RequiredAction } from "@components/RequiredAction";

const RacesPage: NextPage = () => {
  return (
    <AppLayout>
      <Teams />
      <RequiredAction message="Please choose a team" />
    </AppLayout>
  );
};

export default RacesPage;
