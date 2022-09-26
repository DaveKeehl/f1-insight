import { Circuit } from "./circuit";
import { Constructor } from "./constructor";
import { IDriver } from "./driver";

interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
}

export interface RaceSchedule extends Race {
  FirstPractice: Session;
  SecondPractice: Session;
  ThirdPractice?: Session;
  Qualifying: Session;
  Sprint?: Session;
}

interface DriverResult {
  number: string;
  position: string;
  Driver: IDriver;
  Constructor: Constructor;
}

export interface DriverRaceResult extends DriverResult {
  positionText: string;
  points: string;
  grid: string;
  laps: string;
  status: string;
  Time?: {
    millis: string;
    time: string;
  };
  FastestLap: FastestLap;
}

export interface DriverQualifyingResult extends DriverResult {
  Q1: string;
  Q2?: string;
  Q3?: string;
}

export interface RaceResult extends Race {
  Results: DriverRaceResult[];
}

export interface QualifyingResult extends Race {
  QualifyingResults: DriverQualifyingResult[];
}

interface Session {
  date: string;
  time: string;
}

interface FastestLap {
  rank: string;
  lap: string;
  Time: {
    time: string;
  };
  AverageSpeed: {
    units: string;
    speed: string;
  };
}
