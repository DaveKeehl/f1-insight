import { Metadata } from "next";

import RequiredAction from "@/components/RequiredAction";

export const metadata: Metadata = {
  title: "Drivers"
};

export default function DriversPage() {
  return <RequiredAction message="Please choose a driver" />;
}
