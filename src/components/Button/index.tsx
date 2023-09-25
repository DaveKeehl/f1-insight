"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChartLine, FlagCheckered, Trophy, User, Users } from "@phosphor-icons/react";

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

export default function Button({ icon, href }: IButton) {
  const pathname = usePathname();

  const selected = pathname.includes(href);
  const background = selected ? "bg-brand-red-100" : "bg-brand-red-200";

  return (
    <Link href={href}>
      <button
        className={`rounded-lg ${background} p-[6px] transition hover:bg-brand-red-100/50 active:bg-brand-red-100`}
      >
        <Icon name={icon} />
      </button>
    </Link>
  );
}
