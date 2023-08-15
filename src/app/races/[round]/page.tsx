import type { Metadata } from "next";

type Props = {
  params: { round: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const circuit = "CIRCUIT";

  return {
    title: `${circuit} (Round ${params.round})`
  };
}

export default function RacePage({ params }: Props) {
  return <div>round: {params.round}</div>;
}
