import { RaceCard } from "../Card";
import { Cards } from "./Cards";

import { races } from "@utils/mock";
import { getPrettyDate } from "@utils/helpers";

export const Races = () => {
  return (
    <Cards
      data={races}
      renderCard={(race) => (
        <RaceCard
          round={Number.parseInt(race.round)}
          circuitId={race.Circuit.circuitId}
          country={race.Circuit.Location.country}
          year={race.date.split("-")[0] || ""}
          date={getPrettyDate(race.date)}
        />
      )}
    />
  );
};
