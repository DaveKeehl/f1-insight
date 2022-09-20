import { Constructor } from "./constructor";
import { Driver } from "./driver";

interface Standing {
  position: string;
  positionText: string;
  points: string;
  wins: string;
}

export interface DriverStanding extends Standing {
  Driver: Driver;
  Constructors: Constructor[];
}

export interface ConstructorStanding extends Standing {
  Constructor: Constructor;
}
