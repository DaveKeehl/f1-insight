import { gradient, shadow } from "@/utils/mappings";

interface IActor {
  actor: "driver" | "team";
  team: string;
  infoDialog: React.ReactNode;
  drivers: React.ReactNode;
  chart: React.ReactNode;
}

const GradientBackground = ({ team }: { team: string }) => {
  return (
    <div className={`absolute left-0 top-0 h-full w-full bg-gradient-to-b ${gradient[team]}`} />
  );
};

export default function Actor({ actor, team, infoDialog, drivers, chart }: IActor) {
  const clean = {
    team: team.toLowerCase().replace(/\s/g, "")
  };

  console.log({ team: clean.team });

  const maxWidth = {
    driver: "max-w-[798px]",
    team: "max-w-[920px]"
  };

  // md:h-72 lg:h-[350px] xl:h-96

  return (
    <div
      className={`relative w-full ${maxWidth[actor]} flex-none overflow-hidden rounded-[40px] ${
        shadow[clean.team]
      }`}
    >
      <div className="relative z-10 p-[5px]">
        <div className="relative z-30">{infoDialog}</div>
        <div className="relative overflow-hidden rounded-[35px]">
          {drivers}
          <div className="h-[350px] w-full bg-brand-blue-400">{chart}</div>
        </div>
      </div>
      <GradientBackground team={clean.team} />
    </div>
  );
}
