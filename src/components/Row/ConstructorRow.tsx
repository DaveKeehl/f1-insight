import Row from "@/components/Row";

import { ConstructorRef } from "@/utils/types/misc";

export default function ConstructorRow({
  position,
  team,
  value
}: {
  position: number;
  team: {
    name: string;
    ref: string;
  };
  value: string;
}) {
  return (
    <Row
      position={position}
      constructorRef={team.ref}
      slots={{
        start: <p>{team.name}</p>,
        end: <p>{value}</p>
      }}
    />
  );
}
