import { Metadata } from "next";

import RequiredAction from "@/components/RequiredAction";

export const metadata: Metadata = {
  title: "Teams"
};

export default function TeamsPage() {
  return <RequiredAction message="Please choose a team" />;
}
