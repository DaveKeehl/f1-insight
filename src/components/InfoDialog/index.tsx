"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";

interface IInfoDialog {
  data: IDialogEntry[];
}

interface IDialogEntry {
  title: string;
  value: string;
}

const DialogEntry = ({ title, value }: IDialogEntry) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-base font-medium">{title}</h3>
      <p className="text-sm text-brand-white-100 opacity-80">{value}</p>
    </div>
  );
};

export default function InfoDialog({ data }: IInfoDialog) {
  const [open, setOpen] = useState(false);

  const classes =
    "rounded-xl border-2 border-brand-white-100/10 bg-brand-white-100/5 p-2 backdrop-blur-2xl";

  const visibility = open
    ? "opacity-1 translate-y-[0px]"
    : "opacity-0 translate-y-[-10px] pointer-events-none";

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <div className="absolute top-6 right-6 flex flex-col items-end gap-3">
      <button className={classes} onClick={handleClick}>
        {open ? <X size={24} /> : <List size={24} />}
      </button>
      <div
        className={`${classes} ${visibility} flex max-h-96 flex-col gap-4 overflow-auto rounded-3xl px-7 py-5 shadow-info-dialog transition-all duration-300 max-w-xs no-scrollbar`}
      >
        {data.map((item) => (
          <DialogEntry key={uuidv4()} {...item} />
        ))}
      </div>
    </div>
  );
}
