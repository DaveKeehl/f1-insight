export default function TeamPage({ params }: { params: { team: string } }) {
  return <main>team: {params.team}</main>;
}
