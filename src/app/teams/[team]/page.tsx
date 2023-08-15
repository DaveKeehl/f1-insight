export default function TeamPage({ params }: { params: { team: string } }) {
  return <div>driver: {params.team}</div>;
}
