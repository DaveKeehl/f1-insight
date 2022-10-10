import { getPrettyDate } from "@utils/helpers";
import { RaceSchedule } from "@utils/types/race";

import { RaceCard } from "../Card";
import { Cards } from "./Cards";

interface IRaces {
  races: RaceSchedule[];
}

export const Races = ({ races }: IRaces) => {
  return (
    <Cards
      data={races}
      keyExtractor={(race) => race.round}
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
