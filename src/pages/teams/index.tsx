import type { NextPage } from "next";

import { AppLayout } from "@layouts/AppLayout";
import { Teams } from "../../components/Teams";

const RacesPage: NextPage = () => {
  return (
    <AppLayout>
      <Teams />
      <div className="flex flex-auto flex-col items-center justify-center bg-brand-blue-400 text-brand-white-100">
        <h1 className="text-3xl font-medium">Please choose a team</h1>
      </div>
    </AppLayout>
  );
};

export default RacesPage;
