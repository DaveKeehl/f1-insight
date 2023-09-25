import Table from "@/components/Table";
import ConstructorRow from "@/components/Row/ConstructorRow";

export default function ConstructorsTable({
  rows
}: {
  rows: {
    position: number;
    team: {
      name: string;
      ref: string;
    };
    value: string;
  }[];
}) {
  return (
    <Table
      data={rows}
      breakpoint="lg"
      renderItem={(result) => {
        return (
          <ConstructorRow
            position={result.position}
            team={{
              name: result.team.name ?? "",
              ref: result.team.ref ?? ""
            }}
            value={result.value ?? ""}
          />
        );
      }}
    />
  );
}
