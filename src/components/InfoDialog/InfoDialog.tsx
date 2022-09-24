import { useState } from "react";
import { List, X } from "phosphor-react";
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

export const InfoDialog = ({ data }: IInfoDialog) => {
  const [open, setOpen] = useState(false);

  const classes =
    "rounded-xl border-2 border-brand-white-100/10 bg-brand-white-100/5 p-2 backdrop-blur-2xl";

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <div className="absolute top-6 right-6 flex flex-col items-end gap-3">
      <button className={classes} onClick={handleClick}>
        {open ? <X size={24} /> : <List size={24} />}
      </button>
      {open && (
        <div
          className={`${classes} flex flex-col gap-4 rounded-3xl p-7 shadow-info-dialog`}
        >
          {data.map((item) => (
            <DialogEntry key={uuidv4()} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};
