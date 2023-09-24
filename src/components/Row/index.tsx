import { background, glow } from "@/utils/mappings";

const GlowBlock = ({ team }: { team: string }) => {
  return <div className={`h-4 w-[6px] ${background[team]} ${glow[team]}`} />;
};

export default function Row({
  position,
  constructorRef,
  slots
}: {
  position: number;
  constructorRef: string;
  slots: {
    start: React.ReactNode;
    end: React.ReactNode;
  };
}) {
  return (
    <div className="row mb-[10px] flex w-full items-center justify-between rounded-lg border border-brand-blue-200 bg-brand-blue-300 px-7 py-3 text-sm">
      <div className="flex items-center gap-4">
        <p className="w-5">{position}</p>
        <GlowBlock team={constructorRef} />
        {slots.start}
      </div>
      <div className="text-right">{slots.end}</div>
    </div>
  );
}
