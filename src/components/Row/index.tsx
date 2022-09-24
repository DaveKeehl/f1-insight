import { background, glow } from "@utils/mappings";

interface IRow {
  position: string;
  name: string;
  team: string;
  value: string;
  detail?: string;
}

export const Row = ({ position, name, team, detail, value }: IRow) => {
  const corrections: { [key: string]: string } = {
    "Haas F1 Team": "haas",
    "Alpine F1 Team": "alpine"
  };

  const clean = {
    team: Object.keys(corrections).includes(team)
      ? corrections[team]
      : team.toLowerCase().replace(/\s/g, "")
  };

  return (
    <div className="mb-[10px] flex w-full justify-between rounded-lg border border-brand-blue-200 bg-brand-blue-300 px-7 py-3 text-sm">
      <div className="flex items-center gap-4">
        <p className="w-5">{position}</p>
        <div
          className={`bg-te h-4 w-[6px] ${background[clean.team || ""]} ${
            glow[clean.team || ""]
          }`}
        />
        <div className="flex items-end gap-2">
          <p>
            {name.split(" ")[0]}{" "}
            <span className="font-medium">
              {name.split(" ").slice(1).join(" ")}
            </span>
          </p>
          {detail && (
            <p className="text-xs text-brand-blue-100 opacity-70">{detail}</p>
          )}
        </div>
      </div>
      <p>{value}</p>
    </div>
  );
};
