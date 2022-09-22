import { background, glow } from "../../utils/mappings";

interface IRow {
  position: string;
  positionText: string;
  driver: {
    name: string;
    lastname: string;
  };
  team: string;
  status: string;
  value: string;
}

export const Row = ({ position, driver, team, value }: IRow) => {
  const corrections: { [key: string]: string } = {
    "Haas F1 Team": "haas",
    "Alpine F1 Team": "alpine",
  };

  const clean = {
    team: Object.keys(corrections).includes(team)
      ? corrections[team]
      : team.toLowerCase().replace(/\s/g, ""),
  };

  return (
    <div className="flex w-full justify-between rounded-lg border border-brand-blue-200 bg-brand-blue-300 px-7 py-3 text-sm">
      <div className="flex items-center gap-4">
        <p className="w-5">{position}</p>
        <div
          className={`bg-te h-4 w-[6px] ${background[clean.team || ""]} ${
            glow[clean.team || ""]
          }`}
        />
        <div className="flex items-end gap-2">
          <p>
            {driver.name} <span className="font-medium">{driver.lastname}</span>
          </p>
          <p className="text-xs text-brand-blue-100 opacity-70">{team}</p>
        </div>
      </div>
      <p>{value}</p>
    </div>
  );
};
