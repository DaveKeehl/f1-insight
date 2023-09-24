import Row from "@/components/Row";

import { ConstructorRef } from "@/utils/types/misc";

export default function DriverRow({
  name,
  lastname,
  position,
  team,
  value
}: {
  name: string;
  lastname: string;
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
        start: (
          <div className="row-name flex items-end gap-2">
            <p>
              {name} <span className="font-medium">{lastname}</span>
            </p>
            <p className="mb-[1px] text-xs text-brand-blue-100 opacity-70">{team.name}</p>
          </div>
        ),
        end: <p>{value}</p>
      }}
    />
  );
}
