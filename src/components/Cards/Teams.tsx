import { TeamCard } from "../Card";
import { Cards } from "./Cards";

import { constructors } from "@utils/mock";

export const Teams = () => {
  return (
    <Cards
      data={constructors}
      keyExtractor={(team) => team.name}
      renderCard={(constructor) => <TeamCard name={constructor.name} />}
    />
  );
};
