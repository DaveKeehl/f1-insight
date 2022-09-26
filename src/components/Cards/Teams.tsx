import { TeamCard } from "../Card";
import { Cards } from "./Cards";

import { Constructor } from "@utils/types/constructor";

interface ITeams {
  teams: Constructor[];
}

export const Teams = ({ teams }: ITeams) => {
  return (
    <Cards
      data={teams}
      keyExtractor={(team) => team.name}
      renderCard={(constructor) => <TeamCard name={constructor.name} />}
    />
  );
};
