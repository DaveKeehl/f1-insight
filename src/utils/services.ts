import { Constructor } from "./types/constructor";
import { IDriver } from "./types/driver";
import {
  QualifyingResult,
  RaceResult,
  RaceSchedule,
  SprintResult
} from "./types/race";
import { ConstructorStanding, DriverStanding } from "./types/standings";

export const getDrivers = async () => {
  const res = await fetch("https://ergast.com/api/f1/current/drivers.json");
  return (await res.json()).MRData.DriverTable.Drivers as IDriver[];
};

export const getDriverStandings = async () => {
  const res = await fetch(
    "https://ergast.com/api/f1/current/driverStandings.json"
  );
  return (await res.json()).MRData.StandingsTable.StandingsLists[0]
    .DriverStandings as DriverStanding[];
};

export const getConstructorStandings = async () => {
  const res = await fetch(
    "https://ergast.com/api/f1/current/constructorStandings.json"
  );
  return (await res.json()).MRData.StandingsTable.StandingsLists[0]
    .ConstructorStandings as ConstructorStanding[];
};

export const getRoundConstructorStandings = async (
  round: number,
  team: string
) => {
  const res = await fetch(
    `https://ergast.com/api/f1/current/${round}/constructors/${team}/constructorStandings.json`
  );
  return (await res.json()).MRData.StandingsTable.StandingsLists[0]
    .ConstructorStandings[0] as ConstructorStanding;
};

export const getRacesSchedule = async () => {
  const res = await fetch("https://ergast.com/api/f1/current.json");
  return (await res.json()).MRData.RaceTable.Races as RaceSchedule[];
};

export const getRaceSchedule = async (round: number) => {
  const res = await fetch(`https://ergast.com/api/f1/current/${round}.json`);
  return (await res.json()).MRData.RaceTable.Races[0] as RaceSchedule;
};

export const getTeams = async () => {
  const res = await fetch(
    "https://ergast.com/api/f1/current/constructors.json"
  );
  return (await res.json()).MRData.ConstructorTable
    .Constructors as Constructor[];
};

export const getRaceResult = async (round: number) => {
  const res = await fetch(
    `https://ergast.com/api/f1/current/${round}/results.json`
  );
  return (await res.json()).MRData.RaceTable.Races[0] as RaceResult;
};

export const getQualifyingResult = async (round: number) => {
  const res = await fetch(
    `https://ergast.com/api/f1/current/${round}/qualifying.json`
  );
  return (await res.json()).MRData.RaceTable.Races[0] as QualifyingResult;
};

export const getSprintResult = async (round: number) => {
  const res = await fetch(
    `https://ergast.com/api/f1/current/${round}/sprint.json`
  );
  return (await res.json()).MRData.RaceTable.Races[0] as SprintResult;
};

export const getDriverRaceResults = async (driverId: string) => {
  const res = await fetch(
    `https://ergast.com/api/f1/current/drivers/${driverId}/results.json?limit=30`
  );
  return (await res.json()).MRData.RaceTable.Races as RaceResult[];
};

export const getDriverQualifyingResults = async (driverId: string) => {
  const res = await fetch(
    `https://ergast.com/api/f1/current/drivers/${driverId}/qualifying.json`
  );
  return (await res.json()).MRData.RaceTable.Races as QualifyingResult[];
};
