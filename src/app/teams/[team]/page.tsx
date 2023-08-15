import type { Metadata } from "next";

type Props = {
  params: { team: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.team
  };
}

export default function TeamPage({ params }: Props) {
  return <div>team: {params.team}</div>;
}
