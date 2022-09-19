export interface Location {
  country: string;
  lat: string;
  locality: string;
  long: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface GrandPrix {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
}

export interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
}

export interface Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
}

export interface DriverQualifying {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2: string;
  Q3: string;
}

export interface FastestLap {
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

export interface DriverRace {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: {
    millis: string;
    time: string;
  };
  FastestLap: FastestLap;
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface ConstructorStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}
