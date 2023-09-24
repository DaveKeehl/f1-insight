"use client";

import { useState, ReactNode, ComponentType } from "react";
import { v4 as uuid } from "uuid";

import { type IPill, Pill } from "@/components/Pill";

const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`${className} h-3 w-px bg-brand-blue-200`.trim()} />
);

type TableConfig<Data> = {
  data: Data;
  Component: ComponentType<{ rows: Data }>;
  label: string;
};

type MultiToggleTableProps = {
  configs: TableConfig<any>[];
};

export default function MultiToggleTable({ configs }: MultiToggleTableProps) {
  type Mode = (typeof configs)[number]["label"];

  const [mode, setMode] = useState<Mode>(configs[0].label);

  const renderTableForMode = (mode: Mode): ReactNode => {
    const config = configs.find((c) => c.label === mode);
    if (!config) return null;
    const TableComponent = config.Component;
    return <TableComponent rows={config.data} />;
  };

  return (
    <>
      <div className="flex items-center gap-5">
        {configs.map((config, idx) => (
          <>
            <Pill
              key={uuid()}
              text={config.label}
              selected={mode === config.label}
              onClick={() => setMode(config.label)}
            />
            {idx < configs.length - 1 && <Divider className="ml-[10px]" />}
          </>
        ))}
      </div>
      {renderTableForMode(mode)}
    </>
  );
}
