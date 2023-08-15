import { capitalize } from "lodash";

import { IDriverCareerInfo } from "@/utils/types/driver";

import InfoDialog from "@/components/InfoDialog";

interface IDriverInfoDialog {
  data: IDriverCareerInfo;
}

export default function DriverInfoDialog({ data }: IDriverInfoDialog) {
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
}
