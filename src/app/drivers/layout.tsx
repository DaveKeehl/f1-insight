import DriverCards from "@/components/DriverCards";

export default function DriverLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <DriverCards
        drivers={[
          {
            driverId: "albon",
            permanentNumber: "23",
            code: "ALB",
            url: "http://en.wikipedia.org/wiki/Alexander_Albon",
            givenName: "Alexander",
            familyName: "Albon",
            dateOfBirth: "1996-03-23",
            nationality: "Thai",
            team: "williams"
          },
          {
            driverId: "alonso",
            permanentNumber: "14",
            code: "ALO",
            url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
            givenName: "Fernando",
            familyName: "Alonso",
            dateOfBirth: "1981-07-29",
            nationality: "Spanish",
            team: "aston_martin"
          },
          {
            driverId: "bottas",
            permanentNumber: "77",
            code: "BOT",
            url: "http://en.wikipedia.org/wiki/Valtteri_Bottas",
            givenName: "Valtteri",
            familyName: "Bottas",
            dateOfBirth: "1989-08-28",
            nationality: "Finnish",
            team: "alfa"
          },
          {
            driverId: "de_vries",
            permanentNumber: "21",
            code: "DEV",
            url: "http://en.wikipedia.org/wiki/Nyck_de_Vries",
            givenName: "Nyck",
            familyName: "de Vries",
            dateOfBirth: "1995-02-06",
            nationality: "Dutch",
            team: "alphatauri"
          },
          {
            driverId: "gasly",
            permanentNumber: "10",
            code: "GAS",
            url: "http://en.wikipedia.org/wiki/Pierre_Gasly",
            givenName: "Pierre",
            familyName: "Gasly",
            dateOfBirth: "1996-02-07",
            nationality: "French",
            team: "alpine"
          },
          {
            driverId: "hamilton",
            permanentNumber: "44",
            code: "HAM",
            url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
            givenName: "Lewis",
            familyName: "Hamilton",
            dateOfBirth: "1985-01-07",
            nationality: "British",
            team: "mercedes"
          },
          {
            driverId: "hulkenberg",
            permanentNumber: "27",
            code: "HUL",
            url: "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
            givenName: "Nico",
            familyName: "Hülkenberg",
            dateOfBirth: "1987-08-19",
            nationality: "German",
            team: "haas"
          },
          {
            driverId: "leclerc",
            permanentNumber: "16",
            code: "LEC",
            url: "http://en.wikipedia.org/wiki/Charles_Leclerc",
            givenName: "Charles",
            familyName: "Leclerc",
            dateOfBirth: "1997-10-16",
            nationality: "Monegasque",
            team: "ferrari"
          },
          {
            driverId: "kevin_magnussen",
            permanentNumber: "20",
            code: "MAG",
            url: "http://en.wikipedia.org/wiki/Kevin_Magnussen",
            givenName: "Kevin",
            familyName: "Magnussen",
            dateOfBirth: "1992-10-05",
            nationality: "Danish",
            team: "haas"
          },
          {
            driverId: "norris",
            permanentNumber: "4",
            code: "NOR",
            url: "http://en.wikipedia.org/wiki/Lando_Norris",
            givenName: "Lando",
            familyName: "Norris",
            dateOfBirth: "1999-11-13",
            nationality: "British",
            team: "mclaren"
          },
          {
            driverId: "ocon",
            permanentNumber: "31",
            code: "OCO",
            url: "http://en.wikipedia.org/wiki/Esteban_Ocon",
            givenName: "Esteban",
            familyName: "Ocon",
            dateOfBirth: "1996-09-17",
            nationality: "French",
            team: "alpine"
          },
          {
            driverId: "perez",
            permanentNumber: "11",
            code: "PER",
            url: "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
            givenName: "Sergio",
            familyName: "Pérez",
            dateOfBirth: "1990-01-26",
            nationality: "Mexican",
            team: "red_bull"
          },
          {
            driverId: "piastri",
            permanentNumber: "81",
            code: "PIA",
            url: "http://en.wikipedia.org/wiki/Oscar_Piastri",
            givenName: "Oscar",
            familyName: "Piastri",
            dateOfBirth: "2001-04-06",
            nationality: "Australian",
            team: "mclaren"
          },
          {
            driverId: "ricciardo",
            permanentNumber: "3",
            code: "RIC",
            url: "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
            givenName: "Daniel",
            familyName: "Ricciardo",
            dateOfBirth: "1989-07-01",
            nationality: "Australian",
            team: "alphatauri"
          },
          {
            driverId: "russell",
            permanentNumber: "63",
            code: "RUS",
            url: "http://en.wikipedia.org/wiki/George_Russell_(racing_driver)",
            givenName: "George",
            familyName: "Russell",
            dateOfBirth: "1998-02-15",
            nationality: "British",
            team: "mercedes"
          },
          {
            driverId: "sainz",
            permanentNumber: "55",
            code: "SAI",
            url: "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
            givenName: "Carlos",
            familyName: "Sainz",
            dateOfBirth: "1994-09-01",
            nationality: "Spanish",
            team: "ferrari"
          },
          {
            driverId: "sargeant",
            permanentNumber: "2",
            code: "SAR",
            url: "http://en.wikipedia.org/wiki/Logan_Sargeant",
            givenName: "Logan",
            familyName: "Sargeant",
            dateOfBirth: "2000-12-31",
            nationality: "American",
            team: "williams"
          },
          {
            driverId: "stroll",
            permanentNumber: "18",
            code: "STR",
            url: "http://en.wikipedia.org/wiki/Lance_Stroll",
            givenName: "Lance",
            familyName: "Stroll",
            dateOfBirth: "1998-10-29",
            nationality: "Canadian",
            team: "aston_martin"
          },
          {
            driverId: "tsunoda",
            permanentNumber: "22",
            code: "TSU",
            url: "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
            givenName: "Yuki",
            familyName: "Tsunoda",
            dateOfBirth: "2000-05-11",
            nationality: "Japanese",
            team: "alphatauri"
          },
          {
            driverId: "max_verstappen",
            permanentNumber: "33",
            code: "VER",
            url: "http://en.wikipedia.org/wiki/Max_Verstappen",
            givenName: "Max",
            familyName: "Verstappen",
            dateOfBirth: "1997-09-30",
            nationality: "Dutch",
            team: "red_bull"
          },
          {
            driverId: "zhou",
            permanentNumber: "24",
            code: "ZHO",
            url: "http://en.wikipedia.org/wiki/Zhou_Guanyu",
            givenName: "Guanyu",
            familyName: "Zhou",
            dateOfBirth: "1999-05-30",
            nationality: "Chinese",
            team: "alfa"
          }
        ]}
      />
      {children}
    </div>
  );
}
