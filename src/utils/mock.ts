import { Constructor } from "./types/constructor";
import { IDriver } from "./types/driver";
import { QualifyingResult, RaceResult, RaceSchedule } from "./types/race";
import { ConstructorStanding, DriverStanding } from "./types/standings";

// TODO: To get the number of podiums
// https://ergast.com/api/f1/drivers/max_verstappen/results/1
// https://ergast.com/api/f1/drivers/max_verstappen/results/2
// https://ergast.com/api/f1/drivers/max_verstappen/results/3

// TODO: To get the number of winds
// https://ergast.com/api/f1/drivers/max_verstappen/results/1

// TODO: To get the positions at each lap
// https://ergast.com/api/f1/current/17/laps/40

// https://ergast.com/api/f1/current/drivers.json
export const drivers: IDriver[] = [
  {
    driverId: "albon",
    permanentNumber: "23",
    code: "ALB",
    url: "http://en.wikipedia.org/wiki/Alexander_Albon",
    givenName: "Alexander",
    familyName: "Albon",
    dateOfBirth: "1996-03-23",
    nationality: "Thai"
  },
  {
    driverId: "alonso",
    permanentNumber: "14",
    code: "ALO",
    url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
    givenName: "Fernando",
    familyName: "Alonso",
    dateOfBirth: "1981-07-29",
    nationality: "Spanish"
  },
  {
    driverId: "bottas",
    permanentNumber: "77",
    code: "BOT",
    url: "http://en.wikipedia.org/wiki/Valtteri_Bottas",
    givenName: "Valtteri",
    familyName: "Bottas",
    dateOfBirth: "1989-08-28",
    nationality: "Finnish"
  },
  {
    driverId: "de_vries",
    permanentNumber: "45",
    code: "DEV",
    url: "http://en.wikipedia.org/wiki/Nyck_de_Vries",
    givenName: "Nyck",
    familyName: "de Vries",
    dateOfBirth: "1995-02-06",
    nationality: "Dutch"
  },
  {
    driverId: "gasly",
    permanentNumber: "10",
    code: "GAS",
    url: "http://en.wikipedia.org/wiki/Pierre_Gasly",
    givenName: "Pierre",
    familyName: "Gasly",
    dateOfBirth: "1996-02-07",
    nationality: "French"
  },
  {
    driverId: "hamilton",
    permanentNumber: "44",
    code: "HAM",
    url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    givenName: "Lewis",
    familyName: "Hamilton",
    dateOfBirth: "1985-01-07",
    nationality: "British"
  },
  {
    driverId: "hulkenberg",
    permanentNumber: "27",
    code: "HUL",
    url: "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
    givenName: "Nico",
    familyName: "Hülkenberg",
    dateOfBirth: "1987-08-19",
    nationality: "German"
  },
  {
    driverId: "latifi",
    permanentNumber: "6",
    code: "LAT",
    url: "http://en.wikipedia.org/wiki/Nicholas_Latifi",
    givenName: "Nicholas",
    familyName: "Latifi",
    dateOfBirth: "1995-06-29",
    nationality: "Canadian"
  },
  {
    driverId: "leclerc",
    permanentNumber: "16",
    code: "LEC",
    url: "http://en.wikipedia.org/wiki/Charles_Leclerc",
    givenName: "Charles",
    familyName: "Leclerc",
    dateOfBirth: "1997-10-16",
    nationality: "Monegasque"
  },
  {
    driverId: "kevin_magnussen",
    permanentNumber: "20",
    code: "MAG",
    url: "http://en.wikipedia.org/wiki/Kevin_Magnussen",
    givenName: "Kevin",
    familyName: "Magnussen",
    dateOfBirth: "1992-10-05",
    nationality: "Danish"
  },
  {
    driverId: "norris",
    permanentNumber: "4",
    code: "NOR",
    url: "http://en.wikipedia.org/wiki/Lando_Norris",
    givenName: "Lando",
    familyName: "Norris",
    dateOfBirth: "1999-11-13",
    nationality: "British"
  },
  {
    driverId: "ocon",
    permanentNumber: "31",
    code: "OCO",
    url: "http://en.wikipedia.org/wiki/Esteban_Ocon",
    givenName: "Esteban",
    familyName: "Ocon",
    dateOfBirth: "1996-09-17",
    nationality: "French"
  },
  {
    driverId: "perez",
    permanentNumber: "11",
    code: "PER",
    url: "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
    givenName: "Sergio",
    familyName: "Pérez",
    dateOfBirth: "1990-01-26",
    nationality: "Mexican"
  },
  {
    driverId: "ricciardo",
    permanentNumber: "3",
    code: "RIC",
    url: "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
    givenName: "Daniel",
    familyName: "Ricciardo",
    dateOfBirth: "1989-07-01",
    nationality: "Australian"
  },
  {
    driverId: "russell",
    permanentNumber: "63",
    code: "RUS",
    url: "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
    givenName: "George",
    familyName: "Russell",
    dateOfBirth: "1998-02-15",
    nationality: "British"
  },
  {
    driverId: "sainz",
    permanentNumber: "55",
    code: "SAI",
    url: "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
    givenName: "Carlos",
    familyName: "Sainz",
    dateOfBirth: "1994-09-01",
    nationality: "Spanish"
  },
  {
    driverId: "mick_schumacher",
    permanentNumber: "47",
    code: "MSC",
    url: "http://en.wikipedia.org/wiki/Mick_Schumacher",
    givenName: "Mick",
    familyName: "Schumacher",
    dateOfBirth: "1999-03-22",
    nationality: "German"
  },
  {
    driverId: "stroll",
    permanentNumber: "18",
    code: "STR",
    url: "http://en.wikipedia.org/wiki/Lance_Stroll",
    givenName: "Lance",
    familyName: "Stroll",
    dateOfBirth: "1998-10-29",
    nationality: "Canadian"
  },
  {
    driverId: "tsunoda",
    permanentNumber: "22",
    code: "TSU",
    url: "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
    givenName: "Yuki",
    familyName: "Tsunoda",
    dateOfBirth: "2000-05-11",
    nationality: "Japanese"
  },
  {
    driverId: "max_verstappen",
    permanentNumber: "33",
    code: "VER",
    url: "http://en.wikipedia.org/wiki/Max_Verstappen",
    givenName: "Max",
    familyName: "Verstappen",
    dateOfBirth: "1997-09-30",
    nationality: "Dutch"
  },
  {
    driverId: "vettel",
    permanentNumber: "5",
    code: "VET",
    url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
    givenName: "Sebastian",
    familyName: "Vettel",
    dateOfBirth: "1987-07-03",
    nationality: "German"
  },
  {
    driverId: "zhou",
    permanentNumber: "24",
    code: "ZHO",
    url: "http://en.wikipedia.org/wiki/Guanyu_Zhou",
    givenName: "Guanyu",
    familyName: "Zhou",
    dateOfBirth: "1999-05-30",
    nationality: "Chinese"
  }
];

// https://ergast.com/api/f1/current/constructors.json
export const constructors: Constructor[] = [
  {
    constructorId: "alfa",
    url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
    name: "Alfa Romeo",
    nationality: "Swiss"
  },
  {
    constructorId: "alphatauri",
    url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
    name: "AlphaTauri",
    nationality: "Italian"
  },
  {
    constructorId: "alpine",
    url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
    name: "Alpine F1 Team",
    nationality: "French"
  },
  {
    constructorId: "aston_martin",
    url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
    name: "Aston Martin",
    nationality: "British"
  },
  {
    constructorId: "ferrari",
    url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
    name: "Ferrari",
    nationality: "Italian"
  },
  {
    constructorId: "haas",
    url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
    name: "Haas F1 Team",
    nationality: "American"
  },
  {
    constructorId: "mclaren",
    url: "http://en.wikipedia.org/wiki/McLaren",
    name: "McLaren",
    nationality: "British"
  },
  {
    constructorId: "mercedes",
    url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
    name: "Mercedes",
    nationality: "German"
  },
  {
    constructorId: "red_bull",
    url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
    name: "Red Bull",
    nationality: "Austrian"
  },
  {
    constructorId: "williams",
    url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
    name: "Williams",
    nationality: "British"
  }
];

// https://ergast.com/api/f1/current/driverStandings.json
export const driverStandings: DriverStanding[] = [
  {
    position: "1",
    positionText: "1",
    points: "335",
    wins: "11",
    Driver: {
      driverId: "max_verstappen",
      permanentNumber: "33",
      code: "VER",
      url: "http://en.wikipedia.org/wiki/Max_Verstappen",
      givenName: "Max",
      familyName: "Verstappen",
      dateOfBirth: "1997-09-30",
      nationality: "Dutch"
    },
    Constructors: [
      {
        constructorId: "red_bull",
        url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
        name: "Red Bull",
        nationality: "Austrian"
      }
    ]
  },
  {
    position: "2",
    positionText: "2",
    points: "219",
    wins: "3",
    Driver: {
      driverId: "leclerc",
      permanentNumber: "16",
      code: "LEC",
      url: "http://en.wikipedia.org/wiki/Charles_Leclerc",
      givenName: "Charles",
      familyName: "Leclerc",
      dateOfBirth: "1997-10-16",
      nationality: "Monegasque"
    },
    Constructors: [
      {
        constructorId: "ferrari",
        url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
        name: "Ferrari",
        nationality: "Italian"
      }
    ]
  },
  {
    position: "3",
    positionText: "3",
    points: "210",
    wins: "1",
    Driver: {
      driverId: "perez",
      permanentNumber: "11",
      code: "PER",
      url: "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
      givenName: "Sergio",
      familyName: "Pérez",
      dateOfBirth: "1990-01-26",
      nationality: "Mexican"
    },
    Constructors: [
      {
        constructorId: "red_bull",
        url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
        name: "Red Bull",
        nationality: "Austrian"
      }
    ]
  },
  {
    position: "4",
    positionText: "4",
    points: "203",
    wins: "0",
    Driver: {
      driverId: "russell",
      permanentNumber: "63",
      code: "RUS",
      url: "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
      givenName: "George",
      familyName: "Russell",
      dateOfBirth: "1998-02-15",
      nationality: "British"
    },
    Constructors: [
      {
        constructorId: "mercedes",
        url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
        name: "Mercedes",
        nationality: "German"
      }
    ]
  },
  {
    position: "5",
    positionText: "5",
    points: "187",
    wins: "1",
    Driver: {
      driverId: "sainz",
      permanentNumber: "55",
      code: "SAI",
      url: "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
      givenName: "Carlos",
      familyName: "Sainz",
      dateOfBirth: "1994-09-01",
      nationality: "Spanish"
    },
    Constructors: [
      {
        constructorId: "ferrari",
        url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
        name: "Ferrari",
        nationality: "Italian"
      }
    ]
  },
  {
    position: "6",
    positionText: "6",
    points: "168",
    wins: "0",
    Driver: {
      driverId: "hamilton",
      permanentNumber: "44",
      code: "HAM",
      url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
      givenName: "Lewis",
      familyName: "Hamilton",
      dateOfBirth: "1985-01-07",
      nationality: "British"
    },
    Constructors: [
      {
        constructorId: "mercedes",
        url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
        name: "Mercedes",
        nationality: "German"
      }
    ]
  },
  {
    position: "7",
    positionText: "7",
    points: "88",
    wins: "0",
    Driver: {
      driverId: "norris",
      permanentNumber: "4",
      code: "NOR",
      url: "http://en.wikipedia.org/wiki/Lando_Norris",
      givenName: "Lando",
      familyName: "Norris",
      dateOfBirth: "1999-11-13",
      nationality: "British"
    },
    Constructors: [
      {
        constructorId: "mclaren",
        url: "http://en.wikipedia.org/wiki/McLaren",
        name: "McLaren",
        nationality: "British"
      }
    ]
  },
  {
    position: "8",
    positionText: "8",
    points: "66",
    wins: "0",
    Driver: {
      driverId: "ocon",
      permanentNumber: "31",
      code: "OCO",
      url: "http://en.wikipedia.org/wiki/Esteban_Ocon",
      givenName: "Esteban",
      familyName: "Ocon",
      dateOfBirth: "1996-09-17",
      nationality: "French"
    },
    Constructors: [
      {
        constructorId: "alpine",
        url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
        name: "Alpine F1 Team",
        nationality: "French"
      }
    ]
  },
  {
    position: "9",
    positionText: "9",
    points: "59",
    wins: "0",
    Driver: {
      driverId: "alonso",
      permanentNumber: "14",
      code: "ALO",
      url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
      givenName: "Fernando",
      familyName: "Alonso",
      dateOfBirth: "1981-07-29",
      nationality: "Spanish"
    },
    Constructors: [
      {
        constructorId: "alpine",
        url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
        name: "Alpine F1 Team",
        nationality: "French"
      }
    ]
  },
  {
    position: "10",
    positionText: "10",
    points: "46",
    wins: "0",
    Driver: {
      driverId: "bottas",
      permanentNumber: "77",
      code: "BOT",
      url: "http://en.wikipedia.org/wiki/Valtteri_Bottas",
      givenName: "Valtteri",
      familyName: "Bottas",
      dateOfBirth: "1989-08-28",
      nationality: "Finnish"
    },
    Constructors: [
      {
        constructorId: "alfa",
        url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
        name: "Alfa Romeo",
        nationality: "Swiss"
      }
    ]
  },
  {
    position: "11",
    positionText: "11",
    points: "22",
    wins: "0",
    Driver: {
      driverId: "gasly",
      permanentNumber: "10",
      code: "GAS",
      url: "http://en.wikipedia.org/wiki/Pierre_Gasly",
      givenName: "Pierre",
      familyName: "Gasly",
      dateOfBirth: "1996-02-07",
      nationality: "French"
    },
    Constructors: [
      {
        constructorId: "alphatauri",
        url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
        name: "AlphaTauri",
        nationality: "Italian"
      }
    ]
  },
  {
    position: "12",
    positionText: "12",
    points: "22",
    wins: "0",
    Driver: {
      driverId: "kevin_magnussen",
      permanentNumber: "20",
      code: "MAG",
      url: "http://en.wikipedia.org/wiki/Kevin_Magnussen",
      givenName: "Kevin",
      familyName: "Magnussen",
      dateOfBirth: "1992-10-05",
      nationality: "Danish"
    },
    Constructors: [
      {
        constructorId: "haas",
        url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
        name: "Haas F1 Team",
        nationality: "American"
      }
    ]
  },
  {
    position: "13",
    positionText: "13",
    points: "20",
    wins: "0",
    Driver: {
      driverId: "vettel",
      permanentNumber: "5",
      code: "VET",
      url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
      givenName: "Sebastian",
      familyName: "Vettel",
      dateOfBirth: "1987-07-03",
      nationality: "German"
    },
    Constructors: [
      {
        constructorId: "aston_martin",
        url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
        name: "Aston Martin",
        nationality: "British"
      }
    ]
  },
  {
    position: "14",
    positionText: "14",
    points: "19",
    wins: "0",
    Driver: {
      driverId: "ricciardo",
      permanentNumber: "3",
      code: "RIC",
      url: "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
      givenName: "Daniel",
      familyName: "Ricciardo",
      dateOfBirth: "1989-07-01",
      nationality: "Australian"
    },
    Constructors: [
      {
        constructorId: "mclaren",
        url: "http://en.wikipedia.org/wiki/McLaren",
        name: "McLaren",
        nationality: "British"
      }
    ]
  },
  {
    position: "15",
    positionText: "15",
    points: "12",
    wins: "0",
    Driver: {
      driverId: "mick_schumacher",
      permanentNumber: "47",
      code: "MSC",
      url: "http://en.wikipedia.org/wiki/Mick_Schumacher",
      givenName: "Mick",
      familyName: "Schumacher",
      dateOfBirth: "1999-03-22",
      nationality: "German"
    },
    Constructors: [
      {
        constructorId: "haas",
        url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
        name: "Haas F1 Team",
        nationality: "American"
      }
    ]
  },
  {
    position: "16",
    positionText: "16",
    points: "11",
    wins: "0",
    Driver: {
      driverId: "tsunoda",
      permanentNumber: "22",
      code: "TSU",
      url: "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
      givenName: "Yuki",
      familyName: "Tsunoda",
      dateOfBirth: "2000-05-11",
      nationality: "Japanese"
    },
    Constructors: [
      {
        constructorId: "alphatauri",
        url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
        name: "AlphaTauri",
        nationality: "Italian"
      }
    ]
  },
  {
    position: "17",
    positionText: "17",
    points: "6",
    wins: "0",
    Driver: {
      driverId: "zhou",
      permanentNumber: "24",
      code: "ZHO",
      url: "http://en.wikipedia.org/wiki/Guanyu_Zhou",
      givenName: "Guanyu",
      familyName: "Zhou",
      dateOfBirth: "1999-05-30",
      nationality: "Chinese"
    },
    Constructors: [
      {
        constructorId: "alfa",
        url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
        name: "Alfa Romeo",
        nationality: "Swiss"
      }
    ]
  },
  {
    position: "18",
    positionText: "18",
    points: "5",
    wins: "0",
    Driver: {
      driverId: "stroll",
      permanentNumber: "18",
      code: "STR",
      url: "http://en.wikipedia.org/wiki/Lance_Stroll",
      givenName: "Lance",
      familyName: "Stroll",
      dateOfBirth: "1998-10-29",
      nationality: "Canadian"
    },
    Constructors: [
      {
        constructorId: "aston_martin",
        url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
        name: "Aston Martin",
        nationality: "British"
      }
    ]
  },
  {
    position: "19",
    positionText: "19",
    points: "4",
    wins: "0",
    Driver: {
      driverId: "albon",
      permanentNumber: "23",
      code: "ALB",
      url: "http://en.wikipedia.org/wiki/Alexander_Albon",
      givenName: "Alexander",
      familyName: "Albon",
      dateOfBirth: "1996-03-23",
      nationality: "Thai"
    },
    Constructors: [
      {
        constructorId: "williams",
        url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
        name: "Williams",
        nationality: "British"
      }
    ]
  },
  {
    position: "20",
    positionText: "20",
    points: "2",
    wins: "0",
    Driver: {
      driverId: "de_vries",
      permanentNumber: "45",
      code: "DEV",
      url: "http://en.wikipedia.org/wiki/Nyck_de_Vries",
      givenName: "Nyck",
      familyName: "de Vries",
      dateOfBirth: "1995-02-06",
      nationality: "Dutch"
    },
    Constructors: [
      {
        constructorId: "williams",
        url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
        name: "Williams",
        nationality: "British"
      }
    ]
  },
  {
    position: "21",
    positionText: "21",
    points: "0",
    wins: "0",
    Driver: {
      driverId: "latifi",
      permanentNumber: "6",
      code: "LAT",
      url: "http://en.wikipedia.org/wiki/Nicholas_Latifi",
      givenName: "Nicholas",
      familyName: "Latifi",
      dateOfBirth: "1995-06-29",
      nationality: "Canadian"
    },
    Constructors: [
      {
        constructorId: "williams",
        url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
        name: "Williams",
        nationality: "British"
      }
    ]
  },
  {
    position: "22",
    positionText: "22",
    points: "0",
    wins: "0",
    Driver: {
      driverId: "hulkenberg",
      permanentNumber: "27",
      code: "HUL",
      url: "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
      givenName: "Nico",
      familyName: "Hülkenberg",
      dateOfBirth: "1987-08-19",
      nationality: "German"
    },
    Constructors: [
      {
        constructorId: "aston_martin",
        url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
        name: "Aston Martin",
        nationality: "British"
      }
    ]
  }
];

// https://ergast.com/api/f1/current/constructorStandings.json
export const constructorStandings: ConstructorStanding[] = [
  {
    position: "1",
    positionText: "1",
    points: "545",
    wins: "12",
    Constructor: {
      constructorId: "red_bull",
      url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
      name: "Red Bull",
      nationality: "Austrian"
    }
  },
  {
    position: "2",
    positionText: "2",
    points: "406",
    wins: "4",
    Constructor: {
      constructorId: "ferrari",
      url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
      name: "Ferrari",
      nationality: "Italian"
    }
  },
  {
    position: "3",
    positionText: "3",
    points: "371",
    wins: "0",
    Constructor: {
      constructorId: "mercedes",
      url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
      name: "Mercedes",
      nationality: "German"
    }
  },
  {
    position: "4",
    positionText: "4",
    points: "125",
    wins: "0",
    Constructor: {
      constructorId: "alpine",
      url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
      name: "Alpine F1 Team",
      nationality: "French"
    }
  },
  {
    position: "5",
    positionText: "5",
    points: "107",
    wins: "0",
    Constructor: {
      constructorId: "mclaren",
      url: "http://en.wikipedia.org/wiki/McLaren",
      name: "McLaren",
      nationality: "British"
    }
  },
  {
    position: "6",
    positionText: "6",
    points: "52",
    wins: "0",
    Constructor: {
      constructorId: "alfa",
      url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
      name: "Alfa Romeo",
      nationality: "Swiss"
    }
  },
  {
    position: "7",
    positionText: "7",
    points: "34",
    wins: "0",
    Constructor: {
      constructorId: "haas",
      url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
      name: "Haas F1 Team",
      nationality: "American"
    }
  },
  {
    position: "8",
    positionText: "8",
    points: "33",
    wins: "0",
    Constructor: {
      constructorId: "alphatauri",
      url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
      name: "AlphaTauri",
      nationality: "Italian"
    }
  },
  {
    position: "9",
    positionText: "9",
    points: "25",
    wins: "0",
    Constructor: {
      constructorId: "aston_martin",
      url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
      name: "Aston Martin",
      nationality: "British"
    }
  },
  {
    position: "10",
    positionText: "10",
    points: "6",
    wins: "0",
    Constructor: {
      constructorId: "williams",
      url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
      name: "Williams",
      nationality: "British"
    }
  }
];

// https://ergast.com/api/f1/current.json
export const races: RaceSchedule[] = [
  {
    season: "2022",
    round: "1",
    url: "http://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix",
    raceName: "Bahrain Grand Prix",
    Circuit: {
      circuitId: "bahrain",
      url: "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
      circuitName: "Bahrain International Circuit",
      Location: {
        lat: "26.0325",
        long: "50.5106",
        locality: "Sakhir",
        country: "Bahrain"
      }
    },
    date: "2022-03-20",
    time: "15:00:00Z",
    FirstPractice: {
      date: "2022-03-18",
      time: "12:00:00Z"
    },
    SecondPractice: {
      date: "2022-03-18",
      time: "15:00:00Z"
    },
    ThirdPractice: {
      date: "2022-03-19",
      time: "12:00:00Z"
    },
    Qualifying: {
      date: "2022-03-19",
      time: "15:00:00Z"
    }
  },
  {
    season: "2022",
    round: "2",
    url: "http://en.wikipedia.org/wiki/2022_Saudi_Arabian_Grand_Prix",
    raceName: "Saudi Arabian Grand Prix",
    Circuit: {
      circuitId: "jeddah",
      url: "http://en.wikipedia.org/wiki/Jeddah_Street_Circuit",
      circuitName: "Jeddah Corniche Circuit",
      Location: {
        lat: "21.6319",
        long: "39.1044",
        locality: "Jeddah",
        country: "Saudi Arabia"
      }
    },
    date: "2022-03-27",
    time: "17:00:00Z",
    FirstPractice: {
      date: "2022-03-25",
      time: "14:00:00Z"
    },
    SecondPractice: {
      date: "2022-03-25",
      time: "17:00:00Z"
    },
    ThirdPractice: {
      date: "2022-03-26",
      time: "14:00:00Z"
    },
    Qualifying: {
      date: "2022-03-26",
      time: "17:00:00Z"
    }
  },
  {
    season: "2022",
    round: "3",
    url: "http://en.wikipedia.org/wiki/2022_Australian_Grand_Prix",
    raceName: "Australian Grand Prix",
    Circuit: {
      circuitId: "albert_park",
      url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
      circuitName: "Albert Park Grand Prix Circuit",
      Location: {
        lat: "-37.8497",
        long: "144.968",
        locality: "Melbourne",
        country: "Australia"
      }
    },
    date: "2022-04-10",
    time: "05:00:00Z",
    FirstPractice: {
      date: "2022-04-08",
      time: "03:00:00Z"
    },
    SecondPractice: {
      date: "2022-04-08",
      time: "06:00:00Z"
    },
    ThirdPractice: {
      date: "2022-04-09",
      time: "03:00:00Z"
    },
    Qualifying: {
      date: "2022-04-09",
      time: "06:00:00Z"
    }
  },
  {
    season: "2022",
    round: "4",
    url: "http://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix",
    raceName: "Emilia Romagna Grand Prix",
    Circuit: {
      circuitId: "imola",
      url: "http://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari",
      circuitName: "Autodromo Enzo e Dino Ferrari",
      Location: {
        lat: "44.3439",
        long: "11.7167",
        locality: "Imola",
        country: "Italy"
      }
    },
    date: "2022-04-24",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-04-22",
      time: "11:30:00Z"
    },
    Qualifying: {
      date: "2022-04-22",
      time: "15:00:00Z"
    },
    SecondPractice: {
      date: "2022-04-23",
      time: "10:30:00Z"
    },
    Sprint: {
      date: "2022-04-23",
      time: "14:30:00Z"
    }
  },
  {
    season: "2022",
    round: "5",
    url: "http://en.wikipedia.org/wiki/2022_Miami_Grand_Prix",
    raceName: "Miami Grand Prix",
    Circuit: {
      circuitId: "miami",
      url: "http://en.wikipedia.org/wiki/Miami_International_Autodrome",
      circuitName: "Miami International Autodrome",
      Location: {
        lat: "25.9581",
        long: "-80.2389",
        locality: "Miami",
        country: "USA"
      }
    },
    date: "2022-05-08",
    time: "19:30:00Z",
    FirstPractice: {
      date: "2022-05-06",
      time: "18:30:00Z"
    },
    SecondPractice: {
      date: "2022-05-06",
      time: "21:30:00Z"
    },
    ThirdPractice: {
      date: "2022-05-07",
      time: "17:00:00Z"
    },
    Qualifying: {
      date: "2022-05-07",
      time: "20:00:00Z"
    }
  },
  {
    season: "2022",
    round: "6",
    url: "http://en.wikipedia.org/wiki/2022_Spanish_Grand_Prix",
    raceName: "Spanish Grand Prix",
    Circuit: {
      circuitId: "catalunya",
      url: "http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
      circuitName: "Circuit de Barcelona-Catalunya",
      Location: {
        lat: "41.57",
        long: "2.26111",
        locality: "Montmeló",
        country: "Spain"
      }
    },
    date: "2022-05-22",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-05-20",
      time: "12:00:00Z"
    },
    SecondPractice: {
      date: "2022-05-20",
      time: "15:00:00Z"
    },
    ThirdPractice: {
      date: "2022-05-21",
      time: "11:00:00Z"
    },
    Qualifying: {
      date: "2022-05-21",
      time: "14:00:00Z"
    }
  },
  {
    season: "2022",
    round: "7",
    url: "http://en.wikipedia.org/wiki/2022_Monaco_Grand_Prix",
    raceName: "Monaco Grand Prix",
    Circuit: {
      circuitId: "monaco",
      url: "http://en.wikipedia.org/wiki/Circuit_de_Monaco",
      circuitName: "Circuit de Monaco",
      Location: {
        lat: "43.7347",
        long: "7.42056",
        locality: "Monte-Carlo",
        country: "Monaco"
      }
    },
    date: "2022-05-29",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-05-27",
      time: "12:00:00Z"
    },
    SecondPractice: {
      date: "2022-05-27",
      time: "15:00:00Z"
    },
    ThirdPractice: {
      date: "2022-05-28",
      time: "11:00:00Z"
    },
    Qualifying: {
      date: "2022-05-28",
      time: "14:00:00Z"
    }
  },
  {
    season: "2022",
    round: "8",
    url: "http://en.wikipedia.org/wiki/2022_Azerbaijan_Grand_Prix",
    raceName: "Azerbaijan Grand Prix",
    Circuit: {
      circuitId: "baku",
      url: "http://en.wikipedia.org/wiki/Baku_City_Circuit",
      circuitName: "Baku City Circuit",
      Location: {
        lat: "40.3725",
        long: "49.8533",
        locality: "Baku",
        country: "Azerbaijan"
      }
    },
    date: "2022-06-12",
    time: "11:00:00Z",
    FirstPractice: {
      date: "2022-06-10",
      time: "11:00:00Z"
    },
    SecondPractice: {
      date: "2022-06-10",
      time: "14:00:00Z"
    },
    ThirdPractice: {
      date: "2022-06-11",
      time: "11:00:00Z"
    },
    Qualifying: {
      date: "2022-06-11",
      time: "14:00:00Z"
    }
  },
  {
    season: "2022",
    round: "9",
    url: "http://en.wikipedia.org/wiki/2022_Canadian_Grand_Prix",
    raceName: "Canadian Grand Prix",
    Circuit: {
      circuitId: "villeneuve",
      url: "http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve",
      circuitName: "Circuit Gilles Villeneuve",
      Location: {
        lat: "45.5",
        long: "-73.5228",
        locality: "Montreal",
        country: "Canada"
      }
    },
    date: "2022-06-19",
    time: "18:00:00Z",
    FirstPractice: {
      date: "2022-06-17",
      time: "18:00:00Z"
    },
    SecondPractice: {
      date: "2022-06-17",
      time: "21:00:00Z"
    },
    ThirdPractice: {
      date: "2022-06-18",
      time: "17:00:00Z"
    },
    Qualifying: {
      date: "2022-06-18",
      time: "20:00:00Z"
    }
  },
  {
    season: "2022",
    round: "10",
    url: "http://en.wikipedia.org/wiki/2022_British_Grand_Prix",
    raceName: "British Grand Prix",
    Circuit: {
      circuitId: "silverstone",
      url: "http://en.wikipedia.org/wiki/Silverstone_Circuit",
      circuitName: "Silverstone Circuit",
      Location: {
        lat: "52.0786",
        long: "-1.01694",
        locality: "Silverstone",
        country: "UK"
      }
    },
    date: "2022-07-03",
    time: "14:00:00Z",
    FirstPractice: {
      date: "2022-07-01",
      time: "12:00:00Z"
    },
    SecondPractice: {
      date: "2022-07-01",
      time: "15:00:00Z"
    },
    ThirdPractice: {
      date: "2022-07-02",
      time: "11:00:00Z"
    },
    Qualifying: {
      date: "2022-07-02",
      time: "14:00:00Z"
    }
  },
  {
    season: "2022",
    round: "11",
    url: "http://en.wikipedia.org/wiki/2022_Austrian_Grand_Prix",
    raceName: "Austrian Grand Prix",
    Circuit: {
      circuitId: "red_bull_ring",
      url: "http://en.wikipedia.org/wiki/Red_Bull_Ring",
      circuitName: "Red Bull Ring",
      Location: {
        lat: "47.2197",
        long: "14.7647",
        locality: "Spielberg",
        country: "Austria"
      }
    },
    date: "2022-07-10",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-07-08",
      time: "11:30:00Z"
    },
    Qualifying: {
      date: "2022-07-08",
      time: "15:00:00Z"
    },
    SecondPractice: {
      date: "2022-07-09",
      time: "10:30:00Z"
    },
    Sprint: {
      date: "2022-07-09",
      time: "14:30:00Z"
    }
  },
  {
    season: "2022",
    round: "12",
    url: "http://en.wikipedia.org/wiki/2022_French_Grand_Prix",
    raceName: "French Grand Prix",
    Circuit: {
      circuitId: "ricard",
      url: "http://en.wikipedia.org/wiki/Paul_Ricard_Circuit",
      circuitName: "Circuit Paul Ricard",
      Location: {
        lat: "43.2506",
        long: "5.79167",
        locality: "Le Castellet",
        country: "France"
      }
    },
    date: "2022-07-24",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-07-22",
      time: "12:00:00Z"
    },
    SecondPractice: {
      date: "2022-07-22",
      time: "15:00:00Z"
    },
    ThirdPractice: {
      date: "2022-07-23",
      time: "11:00:00Z"
    },
    Qualifying: {
      date: "2022-07-23",
      time: "14:00:00Z"
    }
  },
  {
    season: "2022",
    round: "13",
    url: "http://en.wikipedia.org/wiki/2022_Hungarian_Grand_Prix",
    raceName: "Hungarian Grand Prix",
    Circuit: {
      circuitId: "hungaroring",
      url: "http://en.wikipedia.org/wiki/Hungaroring",
      circuitName: "Hungaroring",
      Location: {
        lat: "47.5789",
        long: "19.2486",
        locality: "Budapest",
        country: "Hungary"
      }
    },
    date: "2022-07-31",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-07-29",
      time: "12:00:00Z"
    },
    SecondPractice: {
      date: "2022-07-29",
      time: "15:00:00Z"
    },
    ThirdPractice: {
      date: "2022-07-30",
      time: "11:00:00Z"
    },
    Qualifying: {
      date: "2022-07-30",
      time: "14:00:00Z"
    }
  },
  {
    season: "2022",
    round: "14",
    url: "http://en.wikipedia.org/wiki/2022_Belgian_Grand_Prix",
    raceName: "Belgian Grand Prix",
    Circuit: {
      circuitId: "spa",
      url: "http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
      circuitName: "Circuit de Spa-Francorchamps",
      Location: {
        lat: "50.4372",
        long: "5.97139",
        locality: "Spa",
        country: "Belgium"
      }
    },
    date: "2022-08-28",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-08-26",
      time: "12:00:00Z"
    },
    SecondPractice: {
      date: "2022-08-26",
      time: "15:00:00Z"
    },
    ThirdPractice: {
      date: "2022-08-27",
      time: "11:00:00Z"
    },
    Qualifying: {
      date: "2022-08-27",
      time: "14:00:00Z"
    }
  },
  {
    season: "2022",
    round: "15",
    url: "http://en.wikipedia.org/wiki/2022_Dutch_Grand_Prix",
    raceName: "Dutch Grand Prix",
    Circuit: {
      circuitId: "zandvoort",
      url: "http://en.wikipedia.org/wiki/Circuit_Zandvoort",
      circuitName: "Circuit Park Zandvoort",
      Location: {
        lat: "52.3888",
        long: "4.54092",
        locality: "Zandvoort",
        country: "Netherlands"
      }
    },
    date: "2022-09-04",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-09-02",
      time: "10:30:00Z"
    },
    SecondPractice: {
      date: "2022-09-02",
      time: "14:00:00Z"
    },
    ThirdPractice: {
      date: "2022-09-03",
      time: "10:00:00Z"
    },
    Qualifying: {
      date: "2022-09-03",
      time: "13:00:00Z"
    }
  },
  {
    season: "2022",
    round: "16",
    url: "http://en.wikipedia.org/wiki/2022_Italian_Grand_Prix",
    raceName: "Italian Grand Prix",
    Circuit: {
      circuitId: "monza",
      url: "http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza",
      circuitName: "Autodromo Nazionale di Monza",
      Location: {
        lat: "45.6156",
        long: "9.28111",
        locality: "Monza",
        country: "Italy"
      }
    },
    date: "2022-09-11",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-09-09",
      time: "12:00:00Z"
    },
    SecondPractice: {
      date: "2022-09-09",
      time: "15:00:00Z"
    },
    ThirdPractice: {
      date: "2022-09-10",
      time: "11:00:00Z"
    },
    Qualifying: {
      date: "2022-09-10",
      time: "14:00:00Z"
    }
  },
  {
    season: "2022",
    round: "17",
    url: "http://en.wikipedia.org/wiki/2022_Singapore_Grand_Prix",
    raceName: "Singapore Grand Prix",
    Circuit: {
      circuitId: "marina_bay",
      url: "http://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit",
      circuitName: "Marina Bay Street Circuit",
      Location: {
        lat: "1.2914",
        long: "103.864",
        locality: "Marina Bay",
        country: "Singapore"
      }
    },
    date: "2022-10-02",
    time: "12:00:00Z",
    FirstPractice: {
      date: "2022-09-30",
      time: "10:00:00Z"
    },
    SecondPractice: {
      date: "2022-09-30",
      time: "13:00:00Z"
    },
    ThirdPractice: {
      date: "2022-10-01",
      time: "10:00:00Z"
    },
    Qualifying: {
      date: "2022-10-01",
      time: "13:00:00Z"
    }
  },
  {
    season: "2022",
    round: "18",
    url: "http://en.wikipedia.org/wiki/2022_Japanese_Grand_Prix",
    raceName: "Japanese Grand Prix",
    Circuit: {
      circuitId: "suzuka",
      url: "http://en.wikipedia.org/wiki/Suzuka_Circuit",
      circuitName: "Suzuka Circuit",
      Location: {
        lat: "34.8431",
        long: "136.541",
        locality: "Suzuka",
        country: "Japan"
      }
    },
    date: "2022-10-09",
    time: "05:00:00Z",
    FirstPractice: {
      date: "2022-10-07",
      time: "03:00:00Z"
    },
    SecondPractice: {
      date: "2022-10-07",
      time: "06:00:00Z"
    },
    ThirdPractice: {
      date: "2022-10-08",
      time: "03:00:00Z"
    },
    Qualifying: {
      date: "2022-10-08",
      time: "06:00:00Z"
    }
  },
  {
    season: "2022",
    round: "19",
    url: "http://en.wikipedia.org/wiki/2022_United_States_Grand_Prix",
    raceName: "United States Grand Prix",
    Circuit: {
      circuitId: "americas",
      url: "http://en.wikipedia.org/wiki/Circuit_of_the_Americas",
      circuitName: "Circuit of the Americas",
      Location: {
        lat: "30.1328",
        long: "-97.6411",
        locality: "Austin",
        country: "USA"
      }
    },
    date: "2022-10-23",
    time: "19:00:00Z",
    FirstPractice: {
      date: "2022-10-21",
      time: "19:00:00Z"
    },
    SecondPractice: {
      date: "2022-10-21",
      time: "22:00:00Z"
    },
    ThirdPractice: {
      date: "2022-10-22",
      time: "19:00:00Z"
    },
    Qualifying: {
      date: "2022-10-22",
      time: "22:00:00Z"
    }
  },
  {
    season: "2022",
    round: "20",
    url: "http://en.wikipedia.org/wiki/2022_Mexican_Grand_Prix",
    raceName: "Mexico City Grand Prix",
    Circuit: {
      circuitId: "rodriguez",
      url: "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez",
      circuitName: "Autódromo Hermanos Rodríguez",
      Location: {
        lat: "19.4042",
        long: "-99.0907",
        locality: "Mexico City",
        country: "Mexico"
      }
    },
    date: "2022-10-30",
    time: "20:00:00Z",
    FirstPractice: {
      date: "2022-10-28",
      time: "18:00:00Z"
    },
    SecondPractice: {
      date: "2022-10-28",
      time: "21:00:00Z"
    },
    ThirdPractice: {
      date: "2022-10-29",
      time: "17:00:00Z"
    },
    Qualifying: {
      date: "2022-10-29",
      time: "20:00:00Z"
    }
  },
  {
    season: "2022",
    round: "21",
    url: "http://en.wikipedia.org/wiki/2022_Brazilian_Grand_Prix",
    raceName: "Brazilian Grand Prix",
    Circuit: {
      circuitId: "interlagos",
      url: "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace",
      circuitName: "Autódromo José Carlos Pace",
      Location: {
        lat: "-23.7036",
        long: "-46.6997",
        locality: "São Paulo",
        country: "Brazil"
      }
    },
    date: "2022-11-13",
    time: "18:00:00Z",
    FirstPractice: {
      date: "2022-11-11",
      time: "15:30:00Z"
    },
    Qualifying: {
      date: "2022-11-11",
      time: "19:00:00Z"
    },
    SecondPractice: {
      date: "2022-11-12",
      time: "15:30:00Z"
    },
    Sprint: {
      date: "2022-11-12",
      time: "19:30:00Z"
    }
  },
  {
    season: "2022",
    round: "22",
    url: "http://en.wikipedia.org/wiki/2022_Abu_Dhabi_Grand_Prix",
    raceName: "Abu Dhabi Grand Prix",
    Circuit: {
      circuitId: "yas_marina",
      url: "http://en.wikipedia.org/wiki/Yas_Marina_Circuit",
      circuitName: "Yas Marina Circuit",
      Location: {
        lat: "24.4672",
        long: "54.6031",
        locality: "Abu Dhabi",
        country: "UAE"
      }
    },
    date: "2022-11-20",
    time: "13:00:00Z",
    FirstPractice: {
      date: "2022-11-18",
      time: "10:00:00Z"
    },
    SecondPractice: {
      date: "2022-11-18",
      time: "13:00:00Z"
    },
    ThirdPractice: {
      date: "2022-11-19",
      time: "11:00:00Z"
    },
    Qualifying: {
      date: "2022-11-19",
      time: "14:00:00Z"
    }
  }
];

// https://ergast.com/api/f1/current/drivers/max_verstappen/results.json
export const verstappenRaceResults: RaceResult[] = [
  {
    season: "2022",
    round: "1",
    url: "http://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix",
    raceName: "Bahrain Grand Prix",
    Circuit: {
      circuitId: "bahrain",
      url: "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
      circuitName: "Bahrain International Circuit",
      Location: {
        lat: "26.0325",
        long: "50.5106",
        locality: "Sakhir",
        country: "Bahrain"
      }
    },
    date: "2022-03-20",
    time: "15:00:00Z",
    Results: [
      {
        number: "1",
        position: "19",
        positionText: "19",
        points: "0",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "2",
        laps: "54",
        status: "Fuel pressure",
        FastestLap: {
          rank: "2",
          lap: "51",
          Time: {
            time: "1:35.440"
          },
          AverageSpeed: {
            units: "kph",
            speed: "204.140"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "2",
    url: "http://en.wikipedia.org/wiki/2022_Saudi_Arabian_Grand_Prix",
    raceName: "Saudi Arabian Grand Prix",
    Circuit: {
      circuitId: "jeddah",
      url: "http://en.wikipedia.org/wiki/Jeddah_Street_Circuit",
      circuitName: "Jeddah Corniche Circuit",
      Location: {
        lat: "21.6319",
        long: "39.1044",
        locality: "Jeddah",
        country: "Saudi Arabia"
      }
    },
    date: "2022-03-27",
    time: "17:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "25",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "4",
        laps: "50",
        status: "Finished",
        Time: {
          millis: "5059293",
          time: "1:24:19.293"
        },
        FastestLap: {
          rank: "2",
          lap: "50",
          Time: {
            time: "1:31.772"
          },
          AverageSpeed: {
            units: "kph",
            speed: "242.191"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "3",
    url: "http://en.wikipedia.org/wiki/2022_Australian_Grand_Prix",
    raceName: "Australian Grand Prix",
    Circuit: {
      circuitId: "albert_park",
      url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
      circuitName: "Albert Park Grand Prix Circuit",
      Location: {
        lat: "-37.8497",
        long: "144.968",
        locality: "Melbourne",
        country: "Australia"
      }
    },
    date: "2022-04-10",
    time: "05:00:00Z",
    Results: [
      {
        number: "1",
        position: "18",
        positionText: "R",
        points: "0",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "2",
        laps: "38",
        status: "Fuel leak",
        FastestLap: {
          rank: "6",
          lap: "37",
          Time: {
            time: "1:21.677"
          },
          AverageSpeed: {
            units: "kph",
            speed: "232.633"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "4",
    url: "http://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix",
    raceName: "Emilia Romagna Grand Prix",
    Circuit: {
      circuitId: "imola",
      url: "http://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari",
      circuitName: "Autodromo Enzo e Dino Ferrari",
      Location: {
        lat: "44.3439",
        long: "11.7167",
        locality: "Imola",
        country: "Italy"
      }
    },
    date: "2022-04-24",
    time: "13:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "26",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "1",
        laps: "63",
        status: "Finished",
        Time: {
          millis: "5527986",
          time: "1:32:07.986"
        },
        FastestLap: {
          rank: "1",
          lap: "55",
          Time: {
            time: "1:18.446"
          },
          AverageSpeed: {
            units: "kph",
            speed: "225.281"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "5",
    url: "http://en.wikipedia.org/wiki/2022_Miami_Grand_Prix",
    raceName: "Miami Grand Prix",
    Circuit: {
      circuitId: "miami",
      url: "http://en.wikipedia.org/wiki/Miami_International_Autodrome",
      circuitName: "Miami International Autodrome",
      Location: {
        lat: "25.9581",
        long: "-80.2389",
        locality: "Miami",
        country: "USA"
      }
    },
    date: "2022-05-08",
    time: "19:30:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "26",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "3",
        laps: "57",
        status: "Finished",
        Time: {
          millis: "5664258",
          time: "1:34:24.258"
        },
        FastestLap: {
          rank: "1",
          lap: "54",
          Time: {
            time: "1:31.361"
          },
          AverageSpeed: {
            units: "kph",
            speed: "213.255"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "6",
    url: "http://en.wikipedia.org/wiki/2022_Spanish_Grand_Prix",
    raceName: "Spanish Grand Prix",
    Circuit: {
      circuitId: "catalunya",
      url: "http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
      circuitName: "Circuit de Barcelona-Catalunya",
      Location: {
        lat: "41.57",
        long: "2.26111",
        locality: "Montmeló",
        country: "Spain"
      }
    },
    date: "2022-05-22",
    time: "13:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "25",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "2",
        laps: "66",
        status: "Finished",
        Time: {
          millis: "5840475",
          time: "1:37:20.475"
        },
        FastestLap: {
          rank: "4",
          lap: "46",
          Time: {
            time: "1:25.456"
          },
          AverageSpeed: {
            units: "kph",
            speed: "196.943"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "7",
    url: "http://en.wikipedia.org/wiki/2022_Monaco_Grand_Prix",
    raceName: "Monaco Grand Prix",
    Circuit: {
      circuitId: "monaco",
      url: "http://en.wikipedia.org/wiki/Circuit_de_Monaco",
      circuitName: "Circuit de Monaco",
      Location: {
        lat: "43.7347",
        long: "7.42056",
        locality: "Monte-Carlo",
        country: "Monaco"
      }
    },
    date: "2022-05-29",
    time: "13:00:00Z",
    Results: [
      {
        number: "1",
        position: "3",
        positionText: "3",
        points: "15",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "4",
        laps: "64",
        status: "Finished",
        Time: {
          millis: "6991756",
          time: "+1.491"
        },
        FastestLap: {
          rank: "5",
          lap: "47",
          Time: {
            time: "1:16.052"
          },
          AverageSpeed: {
            units: "kph",
            speed: "157.960"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "8",
    url: "http://en.wikipedia.org/wiki/2022_Azerbaijan_Grand_Prix",
    raceName: "Azerbaijan Grand Prix",
    Circuit: {
      circuitId: "baku",
      url: "http://en.wikipedia.org/wiki/Baku_City_Circuit",
      circuitName: "Baku City Circuit",
      Location: {
        lat: "40.3725",
        long: "49.8533",
        locality: "Baku",
        country: "Azerbaijan"
      }
    },
    date: "2022-06-12",
    time: "11:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "25",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "3",
        laps: "51",
        status: "Finished",
        Time: {
          millis: "5645941",
          time: "1:34:05.941"
        },
        FastestLap: {
          rank: "2",
          lap: "50",
          Time: {
            time: "1:46.050"
          },
          AverageSpeed: {
            units: "kph",
            speed: "203.779"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "9",
    url: "http://en.wikipedia.org/wiki/2022_Canadian_Grand_Prix",
    raceName: "Canadian Grand Prix",
    Circuit: {
      circuitId: "villeneuve",
      url: "http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve",
      circuitName: "Circuit Gilles Villeneuve",
      Location: {
        lat: "45.5",
        long: "-73.5228",
        locality: "Montreal",
        country: "Canada"
      }
    },
    date: "2022-06-19",
    time: "18:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "25",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "1",
        laps: "70",
        status: "Finished",
        Time: {
          millis: "5781757",
          time: "1:36:21.757"
        },
        FastestLap: {
          rank: "2",
          lap: "64",
          Time: {
            time: "1:15.839"
          },
          AverageSpeed: {
            units: "kph",
            speed: "207.012"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "10",
    url: "http://en.wikipedia.org/wiki/2022_British_Grand_Prix",
    raceName: "British Grand Prix",
    Circuit: {
      circuitId: "silverstone",
      url: "http://en.wikipedia.org/wiki/Silverstone_Circuit",
      circuitName: "Silverstone Circuit",
      Location: {
        lat: "52.0786",
        long: "-1.01694",
        locality: "Silverstone",
        country: "UK"
      }
    },
    date: "2022-07-03",
    time: "14:00:00Z",
    Results: [
      {
        number: "1",
        position: "7",
        positionText: "7",
        points: "6",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "2",
        laps: "52",
        status: "Finished",
        Time: {
          millis: "8289088",
          time: "+18.777"
        },
        FastestLap: {
          rank: "8",
          lap: "44",
          Time: {
            time: "1:32.354"
          },
          AverageSpeed: {
            units: "kph",
            speed: "229.633"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "11",
    url: "http://en.wikipedia.org/wiki/2022_Austrian_Grand_Prix",
    raceName: "Austrian Grand Prix",
    Circuit: {
      circuitId: "red_bull_ring",
      url: "http://en.wikipedia.org/wiki/Red_Bull_Ring",
      circuitName: "Red Bull Ring",
      Location: {
        lat: "47.2197",
        long: "14.7647",
        locality: "Spielberg",
        country: "Austria"
      }
    },
    date: "2022-07-10",
    time: "13:00:00Z",
    Results: [
      {
        number: "1",
        position: "2",
        positionText: "2",
        points: "19",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "1",
        laps: "71",
        status: "Finished",
        Time: {
          millis: "5065844",
          time: "+1.532"
        },
        FastestLap: {
          rank: "1",
          lap: "62",
          Time: {
            time: "1:07.275"
          },
          AverageSpeed: {
            units: "kph",
            speed: "231.063"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "12",
    url: "http://en.wikipedia.org/wiki/2022_French_Grand_Prix",
    raceName: "French Grand Prix",
    Circuit: {
      circuitId: "ricard",
      url: "http://en.wikipedia.org/wiki/Paul_Ricard_Circuit",
      circuitName: "Circuit Paul Ricard",
      Location: {
        lat: "43.2506",
        long: "5.79167",
        locality: "Le Castellet",
        country: "France"
      }
    },
    date: "2022-07-24",
    time: "13:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "25",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "2",
        laps: "53",
        status: "Finished",
        Time: {
          millis: "5402112",
          time: "1:30:02.112"
        },
        FastestLap: {
          rank: "2",
          lap: "30",
          Time: {
            time: "1:37.491"
          },
          AverageSpeed: {
            units: "kph",
            speed: "215.724"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "13",
    url: "http://en.wikipedia.org/wiki/2022_Hungarian_Grand_Prix",
    raceName: "Hungarian Grand Prix",
    Circuit: {
      circuitId: "hungaroring",
      url: "http://en.wikipedia.org/wiki/Hungaroring",
      circuitName: "Hungaroring",
      Location: {
        lat: "47.5789",
        long: "19.2486",
        locality: "Budapest",
        country: "Hungary"
      }
    },
    date: "2022-07-31",
    time: "13:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "25",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "10",
        laps: "70",
        status: "Finished",
        Time: {
          millis: "5975912",
          time: "1:39:35.912"
        },
        FastestLap: {
          rank: "6",
          lap: "45",
          Time: {
            time: "1:22.126"
          },
          AverageSpeed: {
            units: "kph",
            speed: "192.041"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "14",
    url: "http://en.wikipedia.org/wiki/2022_Belgian_Grand_Prix",
    raceName: "Belgian Grand Prix",
    Circuit: {
      circuitId: "spa",
      url: "http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
      circuitName: "Circuit de Spa-Francorchamps",
      Location: {
        lat: "50.4372",
        long: "5.97139",
        locality: "Spa",
        country: "Belgium"
      }
    },
    date: "2022-08-28",
    time: "13:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "26",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "14",
        laps: "44",
        status: "Finished",
        Time: {
          millis: "5152894",
          time: "1:25:52.894"
        },
        FastestLap: {
          rank: "1",
          lap: "32",
          Time: {
            time: "1:49.354"
          },
          AverageSpeed: {
            units: "kph",
            speed: "230.575"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "15",
    url: "http://en.wikipedia.org/wiki/2022_Dutch_Grand_Prix",
    raceName: "Dutch Grand Prix",
    Circuit: {
      circuitId: "zandvoort",
      url: "http://en.wikipedia.org/wiki/Circuit_Zandvoort",
      circuitName: "Circuit Park Zandvoort",
      Location: {
        lat: "52.3888",
        long: "4.54092",
        locality: "Zandvoort",
        country: "Netherlands"
      }
    },
    date: "2022-09-04",
    time: "13:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "26",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "1",
        laps: "72",
        status: "Finished",
        Time: {
          millis: "5802773",
          time: "1:36:42.773"
        },
        FastestLap: {
          rank: "1",
          lap: "62",
          Time: {
            time: "1:13.652"
          },
          AverageSpeed: {
            units: "kph",
            speed: "208.173"
          }
        }
      }
    ]
  },
  {
    season: "2022",
    round: "16",
    url: "http://en.wikipedia.org/wiki/2022_Italian_Grand_Prix",
    raceName: "Italian Grand Prix",
    Circuit: {
      circuitId: "monza",
      url: "http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza",
      circuitName: "Autodromo Nazionale di Monza",
      Location: {
        lat: "45.6156",
        long: "9.28111",
        locality: "Monza",
        country: "Italy"
      }
    },
    date: "2022-09-11",
    time: "13:00:00Z",
    Results: [
      {
        number: "1",
        position: "1",
        positionText: "1",
        points: "25",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "7",
        laps: "53",
        status: "Finished",
        Time: {
          millis: "4827511",
          time: "1:20:27.511"
        },
        FastestLap: {
          rank: "6",
          lap: "38",
          Time: {
            time: "1:24.745"
          },
          AverageSpeed: {
            units: "kph",
            speed: "246.088"
          }
        }
      }
    ]
  }
];

// https://ergast.com/api/f1/current/drivers/max_verstappen/qualifying.json
export const verstappenQualifyingResults: QualifyingResult[] = [
  {
    season: "2022",
    round: "1",
    url: "http://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix",
    raceName: "Bahrain Grand Prix",
    Circuit: {
      circuitId: "bahrain",
      url: "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
      circuitName: "Bahrain International Circuit",
      Location: {
        lat: "26.0325",
        long: "50.5106",
        locality: "Sakhir",
        country: "Bahrain"
      }
    },
    date: "2022-03-20",
    time: "15:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "2",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:31.785",
        Q2: "1:30.757",
        Q3: "1:30.681"
      }
    ]
  },
  {
    season: "2022",
    round: "2",
    url: "http://en.wikipedia.org/wiki/2022_Saudi_Arabian_Grand_Prix",
    raceName: "Saudi Arabian Grand Prix",
    Circuit: {
      circuitId: "jeddah",
      url: "http://en.wikipedia.org/wiki/Jeddah_Street_Circuit",
      circuitName: "Jeddah Corniche Circuit",
      Location: {
        lat: "21.6319",
        long: "39.1044",
        locality: "Jeddah",
        country: "Saudi Arabia"
      }
    },
    date: "2022-03-27",
    time: "17:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "4",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:28.928",
        Q2: "1:28.945",
        Q3: "1:28.461"
      }
    ]
  },
  {
    season: "2022",
    round: "3",
    url: "http://en.wikipedia.org/wiki/2022_Australian_Grand_Prix",
    raceName: "Australian Grand Prix",
    Circuit: {
      circuitId: "albert_park",
      url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
      circuitName: "Albert Park Grand Prix Circuit",
      Location: {
        lat: "-37.8497",
        long: "144.968",
        locality: "Melbourne",
        country: "Australia"
      }
    },
    date: "2022-04-10",
    time: "05:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "2",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:18.580",
        Q2: "1:18.611",
        Q3: "1:18.154"
      }
    ]
  },
  {
    season: "2022",
    round: "4",
    url: "http://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix",
    raceName: "Emilia Romagna Grand Prix",
    Circuit: {
      circuitId: "imola",
      url: "http://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari",
      circuitName: "Autodromo Enzo e Dino Ferrari",
      Location: {
        lat: "44.3439",
        long: "11.7167",
        locality: "Imola",
        country: "Italy"
      }
    },
    date: "2022-04-24",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "1",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:19.295",
        Q2: "1:18.793",
        Q3: "1:27.999"
      }
    ]
  },
  {
    season: "2022",
    round: "5",
    url: "http://en.wikipedia.org/wiki/2022_Miami_Grand_Prix",
    raceName: "Miami Grand Prix",
    Circuit: {
      circuitId: "miami",
      url: "http://en.wikipedia.org/wiki/Miami_International_Autodrome",
      circuitName: "Miami International Autodrome",
      Location: {
        lat: "25.9581",
        long: "-80.2389",
        locality: "Miami",
        country: "USA"
      }
    },
    date: "2022-05-08",
    time: "19:30:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "3",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:29.836",
        Q2: "1:29.202",
        Q3: "1:28.991"
      }
    ]
  },
  {
    season: "2022",
    round: "6",
    url: "http://en.wikipedia.org/wiki/2022_Spanish_Grand_Prix",
    raceName: "Spanish Grand Prix",
    Circuit: {
      circuitId: "catalunya",
      url: "http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
      circuitName: "Circuit de Barcelona-Catalunya",
      Location: {
        lat: "41.57",
        long: "2.26111",
        locality: "Montmeló",
        country: "Spain"
      }
    },
    date: "2022-05-22",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "2",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:20.091",
        Q2: "1:19.219",
        Q3: "1:19.073"
      }
    ]
  },
  {
    season: "2022",
    round: "7",
    url: "http://en.wikipedia.org/wiki/2022_Monaco_Grand_Prix",
    raceName: "Monaco Grand Prix",
    Circuit: {
      circuitId: "monaco",
      url: "http://en.wikipedia.org/wiki/Circuit_de_Monaco",
      circuitName: "Circuit de Monaco",
      Location: {
        lat: "43.7347",
        long: "7.42056",
        locality: "Monte-Carlo",
        country: "Monaco"
      }
    },
    date: "2022-05-29",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "4",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:12.993",
        Q2: "1:12.117",
        Q3: "1:11.666"
      }
    ]
  },
  {
    season: "2022",
    round: "8",
    url: "http://en.wikipedia.org/wiki/2022_Azerbaijan_Grand_Prix",
    raceName: "Azerbaijan Grand Prix",
    Circuit: {
      circuitId: "baku",
      url: "http://en.wikipedia.org/wiki/Baku_City_Circuit",
      circuitName: "Baku City Circuit",
      Location: {
        lat: "40.3725",
        long: "49.8533",
        locality: "Baku",
        country: "Azerbaijan"
      }
    },
    date: "2022-06-12",
    time: "11:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "3",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:42.722",
        Q2: "1:42.227",
        Q3: "1:41.706"
      }
    ]
  },
  {
    season: "2022",
    round: "9",
    url: "http://en.wikipedia.org/wiki/2022_Canadian_Grand_Prix",
    raceName: "Canadian Grand Prix",
    Circuit: {
      circuitId: "villeneuve",
      url: "http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve",
      circuitName: "Circuit Gilles Villeneuve",
      Location: {
        lat: "45.5",
        long: "-73.5228",
        locality: "Montreal",
        country: "Canada"
      }
    },
    date: "2022-06-19",
    time: "18:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "1",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:32.219",
        Q2: "1:23.746",
        Q3: "1:21.299"
      }
    ]
  },
  {
    season: "2022",
    round: "10",
    url: "http://en.wikipedia.org/wiki/2022_British_Grand_Prix",
    raceName: "British Grand Prix",
    Circuit: {
      circuitId: "silverstone",
      url: "http://en.wikipedia.org/wiki/Silverstone_Circuit",
      circuitName: "Silverstone Circuit",
      Location: {
        lat: "52.0786",
        long: "-1.01694",
        locality: "Silverstone",
        country: "UK"
      }
    },
    date: "2022-07-03",
    time: "14:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "2",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:39.129",
        Q2: "1:40.655",
        Q3: "1:41.055"
      }
    ]
  },
  {
    season: "2022",
    round: "11",
    url: "http://en.wikipedia.org/wiki/2022_Austrian_Grand_Prix",
    raceName: "Austrian Grand Prix",
    Circuit: {
      circuitId: "red_bull_ring",
      url: "http://en.wikipedia.org/wiki/Red_Bull_Ring",
      circuitName: "Red Bull Ring",
      Location: {
        lat: "47.2197",
        long: "14.7647",
        locality: "Spielberg",
        country: "Austria"
      }
    },
    date: "2022-07-10",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "1",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:05.852",
        Q2: "1:05.374",
        Q3: "1:04.984"
      }
    ]
  },
  {
    season: "2022",
    round: "12",
    url: "http://en.wikipedia.org/wiki/2022_French_Grand_Prix",
    raceName: "French Grand Prix",
    Circuit: {
      circuitId: "ricard",
      url: "http://en.wikipedia.org/wiki/Paul_Ricard_Circuit",
      circuitName: "Circuit Paul Ricard",
      Location: {
        lat: "43.2506",
        long: "5.79167",
        locality: "Le Castellet",
        country: "France"
      }
    },
    date: "2022-07-24",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "2",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:31.891",
        Q2: "1:31.990",
        Q3: "1:31.176"
      }
    ]
  },
  {
    season: "2022",
    round: "13",
    url: "http://en.wikipedia.org/wiki/2022_Hungarian_Grand_Prix",
    raceName: "Hungarian Grand Prix",
    Circuit: {
      circuitId: "hungaroring",
      url: "http://en.wikipedia.org/wiki/Hungaroring",
      circuitName: "Hungaroring",
      Location: {
        lat: "47.5789",
        long: "19.2486",
        locality: "Budapest",
        country: "Hungary"
      }
    },
    date: "2022-07-31",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "10",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:18.509",
        Q2: "1:17.703",
        Q3: "1:18.823"
      }
    ]
  },
  {
    season: "2022",
    round: "14",
    url: "http://en.wikipedia.org/wiki/2022_Belgian_Grand_Prix",
    raceName: "Belgian Grand Prix",
    Circuit: {
      circuitId: "spa",
      url: "http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
      circuitName: "Circuit de Spa-Francorchamps",
      Location: {
        lat: "50.4372",
        long: "5.97139",
        locality: "Spa",
        country: "Belgium"
      }
    },
    date: "2022-08-28",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "1",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:44.581",
        Q2: "1:44.723",
        Q3: "1:43.665"
      }
    ]
  },
  {
    season: "2022",
    round: "15",
    url: "http://en.wikipedia.org/wiki/2022_Dutch_Grand_Prix",
    raceName: "Dutch Grand Prix",
    Circuit: {
      circuitId: "zandvoort",
      url: "http://en.wikipedia.org/wiki/Circuit_Zandvoort",
      circuitName: "Circuit Park Zandvoort",
      Location: {
        lat: "52.3888",
        long: "4.54092",
        locality: "Zandvoort",
        country: "Netherlands"
      }
    },
    date: "2022-09-04",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "1",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:11.317",
        Q2: "1:10.927",
        Q3: "1:10.342"
      }
    ]
  },
  {
    season: "2022",
    round: "16",
    url: "http://en.wikipedia.org/wiki/2022_Italian_Grand_Prix",
    raceName: "Italian Grand Prix",
    Circuit: {
      circuitId: "monza",
      url: "http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza",
      circuitName: "Autodromo Nazionale di Monza",
      Location: {
        lat: "45.6156",
        long: "9.28111",
        locality: "Monza",
        country: "Italy"
      }
    },
    date: "2022-09-11",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "2",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:20.922",
        Q2: "1:21.265",
        Q3: "1:20.306"
      }
    ]
  }
];

// https://ergast.com/api/f1/current/11/results.json
export const raceResult: RaceResult[] = [
  {
    season: "2022",
    round: "11",
    url: "http://en.wikipedia.org/wiki/2022_Austrian_Grand_Prix",
    raceName: "Austrian Grand Prix",
    Circuit: {
      circuitId: "red_bull_ring",
      url: "http://en.wikipedia.org/wiki/Red_Bull_Ring",
      circuitName: "Red Bull Ring",
      Location: {
        lat: "47.2197",
        long: "14.7647",
        locality: "Spielberg",
        country: "Austria"
      }
    },
    date: "2022-07-10",
    time: "13:00:00Z",
    Results: [
      {
        number: "16",
        position: "1",
        positionText: "1",
        points: "25",
        Driver: {
          driverId: "leclerc",
          permanentNumber: "16",
          code: "LEC",
          url: "http://en.wikipedia.org/wiki/Charles_Leclerc",
          givenName: "Charles",
          familyName: "Leclerc",
          dateOfBirth: "1997-10-16",
          nationality: "Monegasque"
        },
        Constructor: {
          constructorId: "ferrari",
          url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
          name: "Ferrari",
          nationality: "Italian"
        },
        grid: "2",
        laps: "71",
        status: "Finished",
        Time: {
          millis: "5064312",
          time: "1:24:24.312"
        },
        FastestLap: {
          rank: "2",
          lap: "62",
          Time: {
            time: "1:07.583"
          },
          AverageSpeed: {
            units: "kph",
            speed: "230.010"
          }
        }
      },
      {
        number: "1",
        position: "2",
        positionText: "2",
        points: "19",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "1",
        laps: "71",
        status: "Finished",
        Time: {
          millis: "5065844",
          time: "+1.532"
        },
        FastestLap: {
          rank: "1",
          lap: "62",
          Time: {
            time: "1:07.275"
          },
          AverageSpeed: {
            units: "kph",
            speed: "231.063"
          }
        }
      },
      {
        number: "44",
        position: "3",
        positionText: "3",
        points: "15",
        Driver: {
          driverId: "hamilton",
          permanentNumber: "44",
          code: "HAM",
          url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
          givenName: "Lewis",
          familyName: "Hamilton",
          dateOfBirth: "1985-01-07",
          nationality: "British"
        },
        Constructor: {
          constructorId: "mercedes",
          url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
          name: "Mercedes",
          nationality: "German"
        },
        grid: "8",
        laps: "71",
        status: "Finished",
        Time: {
          millis: "5105529",
          time: "+41.217"
        },
        FastestLap: {
          rank: "5",
          lap: "63",
          Time: {
            time: "1:09.000"
          },
          AverageSpeed: {
            units: "kph",
            speed: "225.286"
          }
        }
      },
      {
        number: "63",
        position: "4",
        positionText: "4",
        points: "12",
        Driver: {
          driverId: "russell",
          permanentNumber: "63",
          code: "RUS",
          url: "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
          givenName: "George",
          familyName: "Russell",
          dateOfBirth: "1998-02-15",
          nationality: "British"
        },
        Constructor: {
          constructorId: "mercedes",
          url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
          name: "Mercedes",
          nationality: "German"
        },
        grid: "4",
        laps: "71",
        status: "Finished",
        Time: {
          millis: "5123284",
          time: "+58.972"
        },
        FastestLap: {
          rank: "6",
          lap: "61",
          Time: {
            time: "1:09.075"
          },
          AverageSpeed: {
            units: "kph",
            speed: "225.042"
          }
        }
      },
      {
        number: "31",
        position: "5",
        positionText: "5",
        points: "10",
        Driver: {
          driverId: "ocon",
          permanentNumber: "31",
          code: "OCO",
          url: "http://en.wikipedia.org/wiki/Esteban_Ocon",
          givenName: "Esteban",
          familyName: "Ocon",
          dateOfBirth: "1996-09-17",
          nationality: "French"
        },
        Constructor: {
          constructorId: "alpine",
          url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
          name: "Alpine F1 Team",
          nationality: "French"
        },
        grid: "6",
        laps: "71",
        status: "Finished",
        Time: {
          millis: "5132748",
          time: "+1:08.436"
        },
        FastestLap: {
          rank: "10",
          lap: "62",
          Time: {
            time: "1:09.559"
          },
          AverageSpeed: {
            units: "kph",
            speed: "223.476"
          }
        }
      },
      {
        number: "47",
        position: "6",
        positionText: "6",
        points: "8",
        Driver: {
          driverId: "mick_schumacher",
          permanentNumber: "47",
          code: "MSC",
          url: "http://en.wikipedia.org/wiki/Mick_Schumacher",
          givenName: "Mick",
          familyName: "Schumacher",
          dateOfBirth: "1999-03-22",
          nationality: "German"
        },
        Constructor: {
          constructorId: "haas",
          url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
          name: "Haas F1 Team",
          nationality: "American"
        },
        grid: "9",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "11",
          lap: "50",
          Time: {
            time: "1:09.625"
          },
          AverageSpeed: {
            units: "kph",
            speed: "223.264"
          }
        }
      },
      {
        number: "4",
        position: "7",
        positionText: "7",
        points: "6",
        Driver: {
          driverId: "norris",
          permanentNumber: "4",
          code: "NOR",
          url: "http://en.wikipedia.org/wiki/Lando_Norris",
          givenName: "Lando",
          familyName: "Norris",
          dateOfBirth: "1999-11-13",
          nationality: "British"
        },
        Constructor: {
          constructorId: "mclaren",
          url: "http://en.wikipedia.org/wiki/McLaren",
          name: "McLaren",
          nationality: "British"
        },
        grid: "10",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "8",
          lap: "62",
          Time: {
            time: "1:09.304"
          },
          AverageSpeed: {
            units: "kph",
            speed: "224.298"
          }
        }
      },
      {
        number: "20",
        position: "8",
        positionText: "8",
        points: "4",
        Driver: {
          driverId: "kevin_magnussen",
          permanentNumber: "20",
          code: "MAG",
          url: "http://en.wikipedia.org/wiki/Kevin_Magnussen",
          givenName: "Kevin",
          familyName: "Magnussen",
          dateOfBirth: "1992-10-05",
          nationality: "Danish"
        },
        Constructor: {
          constructorId: "haas",
          url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
          name: "Haas F1 Team",
          nationality: "American"
        },
        grid: "7",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "14",
          lap: "61",
          Time: {
            time: "1:09.938"
          },
          AverageSpeed: {
            units: "kph",
            speed: "222.265"
          }
        }
      },
      {
        number: "3",
        position: "9",
        positionText: "9",
        points: "2",
        Driver: {
          driverId: "ricciardo",
          permanentNumber: "3",
          code: "RIC",
          url: "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
          givenName: "Daniel",
          familyName: "Ricciardo",
          dateOfBirth: "1989-07-01",
          nationality: "Australian"
        },
        Constructor: {
          constructorId: "mclaren",
          url: "http://en.wikipedia.org/wiki/McLaren",
          name: "McLaren",
          nationality: "British"
        },
        grid: "11",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "13",
          lap: "61",
          Time: {
            time: "1:09.924"
          },
          AverageSpeed: {
            units: "kph",
            speed: "222.309"
          }
        }
      },
      {
        number: "14",
        position: "10",
        positionText: "10",
        points: "1",
        Driver: {
          driverId: "alonso",
          permanentNumber: "14",
          code: "ALO",
          url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
          givenName: "Fernando",
          familyName: "Alonso",
          dateOfBirth: "1981-07-29",
          nationality: "Spanish"
        },
        Constructor: {
          constructorId: "alpine",
          url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
          name: "Alpine F1 Team",
          nationality: "French"
        },
        grid: "19",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "3",
          lap: "62",
          Time: {
            time: "1:08.558"
          },
          AverageSpeed: {
            units: "kph",
            speed: "226.739"
          }
        }
      },
      {
        number: "77",
        position: "11",
        positionText: "11",
        points: "0",
        Driver: {
          driverId: "bottas",
          permanentNumber: "77",
          code: "BOT",
          url: "http://en.wikipedia.org/wiki/Valtteri_Bottas",
          givenName: "Valtteri",
          familyName: "Bottas",
          dateOfBirth: "1989-08-28",
          nationality: "Finnish"
        },
        Constructor: {
          constructorId: "alfa",
          url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
          name: "Alfa Romeo",
          nationality: "Swiss"
        },
        grid: "0",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "7",
          lap: "61",
          Time: {
            time: "1:09.266"
          },
          AverageSpeed: {
            units: "kph",
            speed: "224.421"
          }
        }
      },
      {
        number: "23",
        position: "12",
        positionText: "12",
        points: "0",
        Driver: {
          driverId: "albon",
          permanentNumber: "23",
          code: "ALB",
          url: "http://en.wikipedia.org/wiki/Alexander_Albon",
          givenName: "Alexander",
          familyName: "Albon",
          dateOfBirth: "1996-03-23",
          nationality: "Thai"
        },
        Constructor: {
          constructorId: "williams",
          url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
          name: "Williams",
          nationality: "British"
        },
        grid: "15",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "12",
          lap: "60",
          Time: {
            time: "1:09.669"
          },
          AverageSpeed: {
            units: "kph",
            speed: "223.123"
          }
        }
      },
      {
        number: "18",
        position: "13",
        positionText: "13",
        points: "0",
        Driver: {
          driverId: "stroll",
          permanentNumber: "18",
          code: "STR",
          url: "http://en.wikipedia.org/wiki/Lance_Stroll",
          givenName: "Lance",
          familyName: "Stroll",
          dateOfBirth: "1998-10-29",
          nationality: "Canadian"
        },
        Constructor: {
          constructorId: "aston_martin",
          url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
          name: "Aston Martin",
          nationality: "British"
        },
        grid: "12",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "17",
          lap: "64",
          Time: {
            time: "1:10.048"
          },
          AverageSpeed: {
            units: "kph",
            speed: "221.916"
          }
        }
      },
      {
        number: "24",
        position: "14",
        positionText: "14",
        points: "0",
        Driver: {
          driverId: "zhou",
          permanentNumber: "24",
          code: "ZHO",
          url: "http://en.wikipedia.org/wiki/Guanyu_Zhou",
          givenName: "Guanyu",
          familyName: "Zhou",
          dateOfBirth: "1999-05-30",
          nationality: "Chinese"
        },
        Constructor: {
          constructorId: "alfa",
          url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
          name: "Alfa Romeo",
          nationality: "Swiss"
        },
        grid: "13",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "9",
          lap: "50",
          Time: {
            time: "1:09.380"
          },
          AverageSpeed: {
            units: "kph",
            speed: "224.053"
          }
        }
      },
      {
        number: "10",
        position: "15",
        positionText: "15",
        points: "0",
        Driver: {
          driverId: "gasly",
          permanentNumber: "10",
          code: "GAS",
          url: "http://en.wikipedia.org/wiki/Pierre_Gasly",
          givenName: "Pierre",
          familyName: "Gasly",
          dateOfBirth: "1996-02-07",
          nationality: "French"
        },
        Constructor: {
          constructorId: "alphatauri",
          url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
          name: "AlphaTauri",
          nationality: "Italian"
        },
        grid: "14",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "18",
          lap: "61",
          Time: {
            time: "1:10.104"
          },
          AverageSpeed: {
            units: "kph",
            speed: "221.739"
          }
        }
      },
      {
        number: "22",
        position: "16",
        positionText: "16",
        points: "0",
        Driver: {
          driverId: "tsunoda",
          permanentNumber: "22",
          code: "TSU",
          url: "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
          givenName: "Yuki",
          familyName: "Tsunoda",
          dateOfBirth: "2000-05-11",
          nationality: "Japanese"
        },
        Constructor: {
          constructorId: "alphatauri",
          url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
          name: "AlphaTauri",
          nationality: "Italian"
        },
        grid: "16",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "16",
          lap: "62",
          Time: {
            time: "1:10.023"
          },
          AverageSpeed: {
            units: "kph",
            speed: "221.995"
          }
        }
      },
      {
        number: "5",
        position: "17",
        positionText: "17",
        points: "0",
        Driver: {
          driverId: "vettel",
          permanentNumber: "5",
          code: "VET",
          url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
          givenName: "Sebastian",
          familyName: "Vettel",
          dateOfBirth: "1987-07-03",
          nationality: "German"
        },
        Constructor: {
          constructorId: "aston_martin",
          url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
          name: "Aston Martin",
          nationality: "British"
        },
        grid: "18",
        laps: "70",
        status: "+1 Lap",
        FastestLap: {
          rank: "15",
          lap: "62",
          Time: {
            time: "1:10.001"
          },
          AverageSpeed: {
            units: "kph",
            speed: "222.065"
          }
        }
      },
      {
        number: "55",
        position: "18",
        positionText: "R",
        points: "0",
        Driver: {
          driverId: "sainz",
          permanentNumber: "55",
          code: "SAI",
          url: "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
          givenName: "Carlos",
          familyName: "Sainz",
          dateOfBirth: "1994-09-01",
          nationality: "Spanish"
        },
        Constructor: {
          constructorId: "ferrari",
          url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
          name: "Ferrari",
          nationality: "Italian"
        },
        grid: "3",
        laps: "56",
        status: "Power Unit",
        FastestLap: {
          rank: "4",
          lap: "55",
          Time: {
            time: "1:08.649"
          },
          AverageSpeed: {
            units: "kph",
            speed: "226.438"
          }
        }
      },
      {
        number: "6",
        position: "19",
        positionText: "R",
        points: "0",
        Driver: {
          driverId: "latifi",
          permanentNumber: "6",
          code: "LAT",
          url: "http://en.wikipedia.org/wiki/Nicholas_Latifi",
          givenName: "Nicholas",
          familyName: "Latifi",
          dateOfBirth: "1995-06-29",
          nationality: "Canadian"
        },
        Constructor: {
          constructorId: "williams",
          url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
          name: "Williams",
          nationality: "British"
        },
        grid: "17",
        laps: "48",
        status: "Undertray",
        FastestLap: {
          rank: "19",
          lap: "14",
          Time: {
            time: "1:10.890"
          },
          AverageSpeed: {
            units: "kph",
            speed: "219.280"
          }
        }
      },
      {
        number: "11",
        position: "20",
        positionText: "R",
        points: "0",
        Driver: {
          driverId: "perez",
          permanentNumber: "11",
          code: "PER",
          url: "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
          givenName: "Sergio",
          familyName: "Pérez",
          dateOfBirth: "1990-01-26",
          nationality: "Mexican"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        grid: "5",
        laps: "24",
        status: "Collision damage",
        FastestLap: {
          rank: "20",
          lap: "5",
          Time: {
            time: "1:11.843"
          },
          AverageSpeed: {
            units: "kph",
            speed: "216.371"
          }
        }
      }
    ]
  }
];

// https://ergast.com/api/f1/current/11/qualifying.json
export const qualifyingResult: QualifyingResult[] = [
  {
    season: "2022",
    round: "11",
    url: "http://en.wikipedia.org/wiki/2022_Austrian_Grand_Prix",
    raceName: "Austrian Grand Prix",
    Circuit: {
      circuitId: "red_bull_ring",
      url: "http://en.wikipedia.org/wiki/Red_Bull_Ring",
      circuitName: "Red Bull Ring",
      Location: {
        lat: "47.2197",
        long: "14.7647",
        locality: "Spielberg",
        country: "Austria"
      }
    },
    date: "2022-07-10",
    time: "13:00:00Z",
    QualifyingResults: [
      {
        number: "1",
        position: "1",
        Driver: {
          driverId: "max_verstappen",
          permanentNumber: "33",
          code: "VER",
          url: "http://en.wikipedia.org/wiki/Max_Verstappen",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:05.852",
        Q2: "1:05.374",
        Q3: "1:04.984"
      },
      {
        number: "16",
        position: "2",
        Driver: {
          driverId: "leclerc",
          permanentNumber: "16",
          code: "LEC",
          url: "http://en.wikipedia.org/wiki/Charles_Leclerc",
          givenName: "Charles",
          familyName: "Leclerc",
          dateOfBirth: "1997-10-16",
          nationality: "Monegasque"
        },
        Constructor: {
          constructorId: "ferrari",
          url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
          name: "Ferrari",
          nationality: "Italian"
        },
        Q1: "1:05.419",
        Q2: "1:05.287",
        Q3: "1:05.013"
      },
      {
        number: "55",
        position: "3",
        Driver: {
          driverId: "sainz",
          permanentNumber: "55",
          code: "SAI",
          url: "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
          givenName: "Carlos",
          familyName: "Sainz",
          dateOfBirth: "1994-09-01",
          nationality: "Spanish"
        },
        Constructor: {
          constructorId: "ferrari",
          url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
          name: "Ferrari",
          nationality: "Italian"
        },
        Q1: "1:05.660",
        Q2: "1:05.576",
        Q3: "1:05.066"
      },
      {
        number: "63",
        position: "4",
        Driver: {
          driverId: "russell",
          permanentNumber: "63",
          code: "RUS",
          url: "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
          givenName: "George",
          familyName: "Russell",
          dateOfBirth: "1998-02-15",
          nationality: "British"
        },
        Constructor: {
          constructorId: "mercedes",
          url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
          name: "Mercedes",
          nationality: "German"
        },
        Q1: "1:06.235",
        Q2: "1:05.697",
        Q3: "1:05.431"
      },
      {
        number: "31",
        position: "5",
        Driver: {
          driverId: "ocon",
          permanentNumber: "31",
          code: "OCO",
          url: "http://en.wikipedia.org/wiki/Esteban_Ocon",
          givenName: "Esteban",
          familyName: "Ocon",
          dateOfBirth: "1996-09-17",
          nationality: "French"
        },
        Constructor: {
          constructorId: "alpine",
          url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
          name: "Alpine F1 Team",
          nationality: "French"
        },
        Q1: "1:06.468",
        Q2: "1:05.993",
        Q3: "1:05.726"
      },
      {
        number: "20",
        position: "6",
        Driver: {
          driverId: "kevin_magnussen",
          permanentNumber: "20",
          code: "MAG",
          url: "http://en.wikipedia.org/wiki/Kevin_Magnussen",
          givenName: "Kevin",
          familyName: "Magnussen",
          dateOfBirth: "1992-10-05",
          nationality: "Danish"
        },
        Constructor: {
          constructorId: "haas",
          url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
          name: "Haas F1 Team",
          nationality: "American"
        },
        Q1: "1:06.366",
        Q2: "1:05.894",
        Q3: "1:05.879"
      },
      {
        number: "47",
        position: "7",
        Driver: {
          driverId: "mick_schumacher",
          permanentNumber: "47",
          code: "MSC",
          url: "http://en.wikipedia.org/wiki/Mick_Schumacher",
          givenName: "Mick",
          familyName: "Schumacher",
          dateOfBirth: "1999-03-22",
          nationality: "German"
        },
        Constructor: {
          constructorId: "haas",
          url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
          name: "Haas F1 Team",
          nationality: "American"
        },
        Q1: "1:06.405",
        Q2: "1:06.151",
        Q3: "1:06.011"
      },
      {
        number: "14",
        position: "8",
        Driver: {
          driverId: "alonso",
          permanentNumber: "14",
          code: "ALO",
          url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
          givenName: "Fernando",
          familyName: "Alonso",
          dateOfBirth: "1981-07-29",
          nationality: "Spanish"
        },
        Constructor: {
          constructorId: "alpine",
          url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
          name: "Alpine F1 Team",
          nationality: "French"
        },
        Q1: "1:06.016",
        Q2: "1:06.082",
        Q3: "1:06.103"
      },
      {
        number: "44",
        position: "9",
        Driver: {
          driverId: "hamilton",
          permanentNumber: "44",
          code: "HAM",
          url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
          givenName: "Lewis",
          familyName: "Hamilton",
          dateOfBirth: "1985-01-07",
          nationality: "British"
        },
        Constructor: {
          constructorId: "mercedes",
          url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
          name: "Mercedes",
          nationality: "German"
        },
        Q1: "1:06.079",
        Q2: "1:05.475",
        Q3: "1:13.151"
      },
      {
        number: "10",
        position: "10",
        Driver: {
          driverId: "gasly",
          permanentNumber: "10",
          code: "GAS",
          url: "http://en.wikipedia.org/wiki/Pierre_Gasly",
          givenName: "Pierre",
          familyName: "Gasly",
          dateOfBirth: "1996-02-07",
          nationality: "French"
        },
        Constructor: {
          constructorId: "alphatauri",
          url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
          name: "AlphaTauri",
          nationality: "Italian"
        },
        Q1: "1:06.589",
        Q2: "1:06.160"
      },
      {
        number: "23",
        position: "11",
        Driver: {
          driverId: "albon",
          permanentNumber: "23",
          code: "ALB",
          url: "http://en.wikipedia.org/wiki/Alexander_Albon",
          givenName: "Alexander",
          familyName: "Albon",
          dateOfBirth: "1996-03-23",
          nationality: "Thai"
        },
        Constructor: {
          constructorId: "williams",
          url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
          name: "Williams",
          nationality: "British"
        },
        Q1: "1:06.516",
        Q2: "1:06.230"
      },
      {
        number: "77",
        position: "12",
        Driver: {
          driverId: "bottas",
          permanentNumber: "77",
          code: "BOT",
          url: "http://en.wikipedia.org/wiki/Valtteri_Bottas",
          givenName: "Valtteri",
          familyName: "Bottas",
          dateOfBirth: "1989-08-28",
          nationality: "Finnish"
        },
        Constructor: {
          constructorId: "alfa",
          url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
          name: "Alfa Romeo",
          nationality: "Swiss"
        },
        Q1: "1:06.442",
        Q2: "1:06.319"
      },
      {
        number: "11",
        position: "13",
        Driver: {
          driverId: "perez",
          permanentNumber: "11",
          code: "PER",
          url: "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
          givenName: "Sergio",
          familyName: "Pérez",
          dateOfBirth: "1990-01-26",
          nationality: "Mexican"
        },
        Constructor: {
          constructorId: "red_bull",
          url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
          name: "Red Bull",
          nationality: "Austrian"
        },
        Q1: "1:06.143",
        Q2: "1:06.458"
      },
      {
        number: "22",
        position: "14",
        Driver: {
          driverId: "tsunoda",
          permanentNumber: "22",
          code: "TSU",
          url: "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
          givenName: "Yuki",
          familyName: "Tsunoda",
          dateOfBirth: "2000-05-11",
          nationality: "Japanese"
        },
        Constructor: {
          constructorId: "alphatauri",
          url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
          name: "AlphaTauri",
          nationality: "Italian"
        },
        Q1: "1:06.463",
        Q2: "1:06.851"
      },
      {
        number: "4",
        position: "15",
        Driver: {
          driverId: "norris",
          permanentNumber: "4",
          code: "NOR",
          url: "http://en.wikipedia.org/wiki/Lando_Norris",
          givenName: "Lando",
          familyName: "Norris",
          dateOfBirth: "1999-11-13",
          nationality: "British"
        },
        Constructor: {
          constructorId: "mclaren",
          url: "http://en.wikipedia.org/wiki/McLaren",
          name: "McLaren",
          nationality: "British"
        },
        Q1: "1:06.330",
        Q2: "1:25.847"
      },
      {
        number: "3",
        position: "16",
        Driver: {
          driverId: "ricciardo",
          permanentNumber: "3",
          code: "RIC",
          url: "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
          givenName: "Daniel",
          familyName: "Ricciardo",
          dateOfBirth: "1989-07-01",
          nationality: "Australian"
        },
        Constructor: {
          constructorId: "mclaren",
          url: "http://en.wikipedia.org/wiki/McLaren",
          name: "McLaren",
          nationality: "British"
        },
        Q1: "1:06.613"
      },
      {
        number: "18",
        position: "17",
        Driver: {
          driverId: "stroll",
          permanentNumber: "18",
          code: "STR",
          url: "http://en.wikipedia.org/wiki/Lance_Stroll",
          givenName: "Lance",
          familyName: "Stroll",
          dateOfBirth: "1998-10-29",
          nationality: "Canadian"
        },
        Constructor: {
          constructorId: "aston_martin",
          url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
          name: "Aston Martin",
          nationality: "British"
        },
        Q1: "1:06.847"
      },
      {
        number: "24",
        position: "18",
        Driver: {
          driverId: "zhou",
          permanentNumber: "24",
          code: "ZHO",
          url: "http://en.wikipedia.org/wiki/Guanyu_Zhou",
          givenName: "Guanyu",
          familyName: "Zhou",
          dateOfBirth: "1999-05-30",
          nationality: "Chinese"
        },
        Constructor: {
          constructorId: "alfa",
          url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
          name: "Alfa Romeo",
          nationality: "Swiss"
        },
        Q1: "1:06.901"
      },
      {
        number: "6",
        position: "19",
        Driver: {
          driverId: "latifi",
          permanentNumber: "6",
          code: "LAT",
          url: "http://en.wikipedia.org/wiki/Nicholas_Latifi",
          givenName: "Nicholas",
          familyName: "Latifi",
          dateOfBirth: "1995-06-29",
          nationality: "Canadian"
        },
        Constructor: {
          constructorId: "williams",
          url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
          name: "Williams",
          nationality: "British"
        },
        Q1: "1:07.003"
      },
      {
        number: "5",
        position: "20",
        Driver: {
          driverId: "vettel",
          permanentNumber: "5",
          code: "VET",
          url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
          givenName: "Sebastian",
          familyName: "Vettel",
          dateOfBirth: "1987-07-03",
          nationality: "German"
        },
        Constructor: {
          constructorId: "aston_martin",
          url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
          name: "Aston Martin",
          nationality: "British"
        },
        Q1: "1:07.083"
      }
    ]
  }
];
