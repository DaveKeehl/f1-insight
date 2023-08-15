"use client";

import { getPrettyDate } from "@/utils/helpers";
import { RaceSchedule } from "@/utils/types/race";

import RaceCard from "@/components/RaceCard";
import Cards from "@/components/Cards";

interface IRaces {
  races: RaceSchedule[];
}

export default function RaceCards({ races }: IRaces) {
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
}
