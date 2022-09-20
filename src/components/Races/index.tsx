import { RaceCard } from "../RaceCard";
import { races } from "../../utils/mock";

export const Races = () => {
  return (
    <aside className="flex flex-col gap-3 overflow-scroll bg-brand-blue-300 p-5">
      {races.map((race) => (
        <RaceCard
          key={race.raceName}
          round={Number.parseInt(race.round)}
          circuitId={race.Circuit.circuitId}
          country={race.Circuit.Location.country}
          year={race.date.split("-")[0] || ""}
          date="18 - 20 MAR"
        />
      ))}
    </aside>
  );
};
