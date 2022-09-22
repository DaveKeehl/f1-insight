interface ITeam {
  name: string;
}

export const Team = ({ name }: ITeam) => {
  return <div>{name}</div>;
};
