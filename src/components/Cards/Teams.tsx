import { v4 as uuidv4 } from "uuid";

import { TeamCard } from "../Card";
import { Cards } from "./Cards";

import { constructors } from "@utils/mock";

export const Teams = () => {
  return (
    <Cards
      data={constructors}
      renderCard={(constructor) => (
        <TeamCard key={uuidv4()} name={constructor.name} />
      )}
    />
  );
};
