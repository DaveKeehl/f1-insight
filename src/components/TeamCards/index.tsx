"use client";

import TeamCard from "@/components/TeamCard";
import Cards from "@/components/Cards";

import { Constructor } from "@/utils/types/constructor";

interface ITeams {
  teams: Constructor[];
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
