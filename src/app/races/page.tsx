import { Metadata } from "next";

import RequiredAction from "@/components/RequiredAction";

export const metadata: Metadata = {
  title: "Races"
};

export default function RacesPage() {
  return <RequiredAction message="Please choose a race" />;
}
