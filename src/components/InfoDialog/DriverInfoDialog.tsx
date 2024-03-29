import { capitalize } from "lodash";

import { IDriverCareerInfo } from "@utils/types/driver";

import { InfoDialog } from "./InfoDialog";

interface IDriverInfoDialog {
  data: IDriverCareerInfo;
}

export const DriverInfoDialog = ({ data }: IDriverInfoDialog) => {
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
