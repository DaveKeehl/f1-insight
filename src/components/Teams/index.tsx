import { TeamCard } from "../TeamCard";

import { constructors } from "@utils/mock";

export const Teams = () => {
  return (
    <aside className="flex flex-col gap-3 overflow-scroll bg-brand-blue-300 p-5">
      {constructors.map((constructor) => (
        <TeamCard key={constructor.constructorId} name={constructor.name} />
      ))}
    </aside>
  );
};
