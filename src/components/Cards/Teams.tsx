import { TeamCard } from "../Card";
import { Cards } from "./Cards";

import { constructors } from "@utils/mock";

export const Teams = () => {
  return (
    <Cards
      data={constructors}
      renderCard={(constructor) => <TeamCard name={constructor.name} />}
    />
  );
};
