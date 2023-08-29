import { background, glow, teamsCorrections } from "@/utils/mappings";

interface IRow {
  position: string;
  name: string;
  team: string;
  value: string;
  target: "driver" | "team";
  detail?: string;
}

const GlowBlock = ({ team }: { team: string }) => {
  return <div className={`bg-te h-4 w-[6px] ${background[team]} ${glow[team]}`} />;
};

export const Row = ({ position, name, team, detail, value, target }: IRow) => {
  const clean = {
    team: Object.keys(teamsCorrections).includes(team)
      ? teamsCorrections[team]?.toLowerCase()
      : team.toLowerCase().replace(/\s/g, "")
  };

  return (
    <div className="row mb-[10px] flex w-full items-center justify-between rounded-lg border border-brand-blue-200 bg-brand-blue-300 px-7 py-3 text-sm">
      <div className="flex items-center gap-4">
        <p className="w-5">{position}</p>
        <GlowBlock team={clean.team || ""} />
        <div className="row-name flex items-end gap-2">
          {target === "driver" ? (
            <p>
              {name.split(" ")[0]}{" "}
              <span className="font-medium">{name.split(" ").slice(1).join(" ")}</span>
            </p>
          ) : (
            <p>{name}</p>
          )}
          {detail && <p className="mb-[1px] text-xs text-brand-blue-100 opacity-70">{detail}</p>}
        </div>
      </div>
      <p className="text-right">{value}</p>
    </div>
  );
};
