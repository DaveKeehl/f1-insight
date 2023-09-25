"use client";

import { v4 as uuid } from "uuid";

import { type IPill, Pill } from "@/components/Pill";
import { useState } from "react";

const Menu = ({ buttons }: { buttons: IPill[] }) => {
  return (
    <div className="flex items-center gap-2">
      {buttons
        .filter((button) => !button.hidden)
        .map((button) => (
          <Pill key={uuid()} {...button} />
        ))}
    </div>
  );
};

export default function TableSwitcher<T extends string>({
  initialMode,
  data
}: {
  initialMode: T;
  data: {
    mode: T;
    component: React.ReactNode;
  }[];
}) {
  const [mode, setMode] = useState(initialMode);

  const activeComponent = data.find((item) => item.mode === mode);

  if (!activeComponent) return <></>;

  return (
    <>
      <Menu
        buttons={data.map((item) => ({
          text: item.mode.toUpperCase(),
          selected: mode === item.mode,
          onClick: () => setMode(item.mode)
        }))}
      />
      {activeComponent.component}
    </>
  );
}
