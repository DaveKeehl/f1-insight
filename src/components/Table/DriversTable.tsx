import Table from "@/components/Table/Table";
import DriverRow from "@/components/Row/DriverRow";

export default function DriversTable({
  rows
}: {
  rows: {
    name: string;
    lastname: string;
    position: number;
    team: {
      name: string;
      ref: string;
    };
    value: string;
  }[];
}) {
  return <Table data={rows} breakpoint="2xl" renderItem={(row) => <DriverRow {...row} />} />;
}
