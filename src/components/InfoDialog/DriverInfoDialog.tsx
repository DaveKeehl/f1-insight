import { InfoDialog } from "./InfoDialog";

export const DriverInfoDialog = () => {
  return (
    <InfoDialog
      data={[
        {
          title: "Podiums",
          value: "20"
        },
        {
          title: "Points",
          value: "779"
        },
        {
          title: "Grands Prix entered",
          value: "97"
        },
        {
          title: "World Championships",
          value: "0"
        },
        {
          title: "Highest race finish",
          value: "1 (x5)"
        },
        {
          title: "Highest grid position",
          value: "1"
        }
      ]}
    />
  );
};
