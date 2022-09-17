import { ChartLine, FlagCheckered, Trophy, User, Users } from "phosphor-react";

type ButtonIcon = "ChartLine" | "FlagCheckered" | "Trophy" | "User" | "Users";

interface IButton {
  icon: ButtonIcon;
}

interface IIcon {
  name: ButtonIcon;
}

const Icon = ({ name }: IIcon) => {
  const props = {
    size: 28,
    color: "#F6F6F9",
  };

  const icons = {
    ChartLine: <ChartLine {...props} />,
    FlagCheckered: <FlagCheckered {...props} weight="fill" />,
    Trophy: <Trophy {...props} />,
    User: <User {...props} />,
    Users: <Users {...props} />,
  };

  return icons[name];
};

export const Button = ({ icon }: IButton) => {
  return (
    <button className="rounded-lg bg-brand-red-200 p-[6px] transition hover:bg-brand-red-100">
      <Icon name={icon} />
    </button>
  );
};
