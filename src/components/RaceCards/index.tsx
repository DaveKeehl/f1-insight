"use client";

import RaceCard from "@/components/RaceCard";
import Cards from "@/components/Cards";

import { getAllCurrentRaces } from "@/db/races/queries";
import { getPrettyDate } from "@/utils/helpers";

interface IRaces {
  races: Awaited<ReturnType<typeof getAllCurrentRaces>>;
}

export default function RaceCards({ races }: IRaces) {
  return (
    <Cards
      data={races}
      keyExtractor={(race) => race.round.toString()}
      renderCard={(race) => (
        <RaceCard
          round={race.round}
          circuitId={race.location ?? ""}
          country={race.country ?? ""}
          year={race.date.split("-")[0] || ""}
          date={getPrettyDate(race.date)}
        />
      )}
    />
  );
}
