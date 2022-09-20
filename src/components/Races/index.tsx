import { sub } from "date-fns";

import { RaceCard } from "../RaceCard";
import { races } from "../../utils/mock";

export const Races = () => {
  return (
    <aside className="flex flex-col gap-3 overflow-scroll bg-brand-blue-300 p-5">
      {races.map((race) => {
        const [year, month, day] = race.date
          .split("-")
          .map((el: string) => +el);

        if (year !== undefined && month !== undefined) {
          const endDate = new Date(year, month - 1, day);
          const endMonth = endDate.toLocaleString("default", {
            month: "short",
          });

          const startDate = sub(endDate, { days: 3 });
          const startMonth = startDate.toLocaleDateString("default", {
            month: "short",
          });

          const date =
            startMonth === endMonth
              ? `${startDate.getDate()} - ${endDate.getDate()} ${endMonth}`
              : `${startDate.getDate()} ${startMonth} - ${endDate.getDate()} ${endMonth}`;

          return (
            <RaceCard
              key={race.raceName}
              round={Number.parseInt(race.round)}
              circuitId={race.Circuit.circuitId}
              country={race.Circuit.Location.country}
              year={race.date.split("-")[0] || ""}
              date={date}
            />
          );
        }
      })}
    </aside>
  );
};
