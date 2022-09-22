import Link from "next/link";
import { useRouter } from "next/router";
import { ChartLine, FlagCheckered, Trophy, User, Users } from "phosphor-react";

import { Tooltip } from "../Tooltip";

type ButtonIcon = "ChartLine" | "FlagCheckered" | "Trophy" | "User" | "Users";

interface IButton {
  icon: ButtonIcon;
  href: string;
  text: string;
}

interface IIcon {
  name: ButtonIcon;
}

const Icon = ({ name }: IIcon) => {
  const props = {
    size: 28,
    color: "#F6F6F9"
  };

  const icons = {
    ChartLine: <ChartLine {...props} />,
    FlagCheckered: <FlagCheckered {...props} weight="fill" />,
    Trophy: <Trophy {...props} />,
    User: <User {...props} />,
    Users: <Users {...props} />
  };

  return icons[name];
};

export const Button = ({ icon, href, text }: IButton) => {
  const router = useRouter();
  const { asPath } = router;

  const selected = asPath.includes(href);
  const background = selected ? "bg-brand-red-100" : "bg-brand-red-200";

  return (
    <Link href={href}>
      <a>
        <button
          className={`rounded-lg ${background} p-[6px] transition hover:bg-brand-red-100/50 active:bg-brand-red-100`}
        >
          <Icon name={icon} />
        </button>
        {/* <Tooltip text={text}>
        </Tooltip> */}
      </a>
    </Link>
  );
};
