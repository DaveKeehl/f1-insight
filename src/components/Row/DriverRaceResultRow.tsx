import { Row } from ".";

interface IDriverRaceResultRow {
  position: string;
  driver: {
    name: string;
    lastname: string;
  };
  team: string;
  value: string;
}

export const DriverRaceResultRow = ({
  position,
  driver,
  team,
  value
}: IDriverRaceResultRow) => (
  <Row
    position={position}
    name={`${driver.name} ${driver.lastname}`}
    team={team}
    detail={team}
    value={value}
  />
);
