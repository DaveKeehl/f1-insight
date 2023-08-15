export default function RacePage({ params }: { params: { round: string } }) {
  return <div>driver: {params.round}</div>;
}
