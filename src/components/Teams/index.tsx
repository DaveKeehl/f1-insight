import { TeamCard } from "../TeamCard";

export const Teams = () => {
  return (
    <aside className="flex flex-col gap-3 overflow-scroll bg-brand-blue-300 p-5">
      <TeamCard name="Red Bull Racing" />
      <TeamCard name="Ferrari" />
      <TeamCard name="Mercedes" />
      <TeamCard name="Alpine" />
      <TeamCard name="McLaren" />
      <TeamCard name="Aston Martin" />
      <TeamCard name="Williams" />
      <TeamCard name="Haas F1 Team" />
      <TeamCard name="AlphaTauri" />
      <TeamCard name="Alfa Romeo" />
    </aside>
  );
};
