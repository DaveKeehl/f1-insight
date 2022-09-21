interface IRow {
  position: string;
  positionText: string;
  driver: {
    name: string;
    lastname: string;
  };
  team: string;
  status: string;
  time?: string;
}

export const Row = ({
  position,
  positionText,
  driver,
  team,
  status,
  time,
}: IRow) => {
  const corrections: { [key: string]: string } = {
    "Haas F1 Team": "haas",
    "Alpine F1 Team": "alpine",
  };

  const clean = {
    team: Object.keys(corrections).includes(team)
      ? corrections[team]
      : team.toLowerCase().replace(/\s/g, ""),
  };

  // Object.keys(corrections).includes(team) ? corrections[team] : team.toLowerCase().replace(/\s/g, "")

  const background: { [key: string]: string } = {
    alfaromeo: "bg-teams-alfaromeo",
    alphatauri: "bg-teams-alphatauri",
    alpine: "bg-teams-alpine",
    astonmartin: "bg-teams-astonmartin",
    ferrari: "bg-teams-ferrari",
    haas: "bg-teams-haas",
    mclaren: "bg-teams-mclaren",
    mercedes: "bg-teams-mercedes",
    redbull: "bg-teams-redbull",
    williams: "bg-teams-williams",
  };

  const shadow: { [key: string]: string } = {
    alfaromeo: "shadow-alfaromeo",
    alphatauri: "shadow-glow-alphatauri",
    alpine: "shadow-glow-alpine",
    astonmartin: "shadow-glow-astonmartin",
    ferrari: "shadow-glow-ferrari",
    haas: "shadow-glow-haas",
    mclaren: "shadow-glow-mclaren",
    mercedes: "shadow-glow-mercedes",
    redbull: "shadow-glow-redbull",
    williams: "shadow-glow-williams",
  };

  return (
    <div className="flex w-full justify-between rounded-lg border border-brand-blue-200 bg-brand-blue-300 px-7 py-3 text-sm">
      <div className="flex items-center gap-4">
        <p className="w-5">{position}</p>
        <div
          className={`bg-te h-4 w-[6px] ${background[clean.team || ""]} ${
            shadow[clean.team || ""]
          }`}
        />
        <div className="flex items-end gap-2">
          <p>
            {driver.name} <span className="font-medium">{driver.lastname}</span>
          </p>
          <p className="text-xs text-brand-blue-100 opacity-70">{team}</p>
        </div>
      </div>
      <p>
        {status === "Finished"
          ? time
          : status.startsWith("+")
          ? status
          : `${positionText} (${status})`}
      </p>
    </div>
  );
};
