import { capitalize } from "lodash";

import { ITeamCareerInfo } from "@utils/types/constructor";

import { InfoDialog } from "./InfoDialog";

interface ITeamInfoDialog {
  data: ITeamCareerInfo;
}

export const TeamInfoDialog = ({ data }: ITeamInfoDialog) => {
  return (
    <InfoDialog
      data={Object.entries(data).map(([key, value]) => {
        return {
          title: capitalize(key.split(/(?=[A-Z])/).join(" ")),
          value
        };
      })}
    />
  );
};
