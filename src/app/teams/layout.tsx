import TeamCards from "@/components/TeamCards";

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <TeamCards
        teams={[
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
        ]}
      />
      {children}
    </div>
  );
}
