import { InfoDialog } from "./InfoDialog";

export const TeamInfoDialog = () => {
  return (
    <InfoDialog
      data={[
        {
          title: "Base",
          value: "Milton Keynes, United Kingdom"
        },
        {
          title: "Team Chief",
          value: "Christian Horner"
        },
        {
          title: "Technical Chief",
          value: "Pierre Waché"
        },
        {
          title: "Chassis",
          value: "RB18"
        },
        {
          title: "Power Unit",
          value: "Red Bull Powertrains"
        },
        {
          title: "First Team Entry",
          value: "1997"
        },
        {
          title: "World Championships",
          value: "4"
        },
        {
          title: "Highest Race Finish",
          value: "1 (x87)"
        },
        {
          title: "Pole Positions",
          value: "78"
        },
        {
          title: "Fastest Laps",
          value: "84"
        }
      ]}
    />
  );
};
