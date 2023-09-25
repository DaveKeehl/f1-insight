"use client";

import TeamCard from "@/components/TeamCard";
import Cards from "@/components/Cards";

import { getAllCurrentConstructors } from "@/db/constructors/queries";

interface ITeams {
  teams: Awaited<ReturnType<typeof getAllCurrentConstructors>>;
}

export default function TeamCards({ teams }: ITeams) {
  return (
    <Cards
      data={teams}
      keyExtractor={(team) => team.name}
      renderCard={(constructor) => <TeamCard name={constructor.name} />}
    />
  );
}
