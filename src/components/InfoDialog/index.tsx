import { useState } from "react";
import { List, X } from "phosphor-react";

export const InfoDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  const classes =
    "rounded-xl border-2 border-brand-white-100/10 bg-brand-white-100/5 p-2 backdrop-blur-2xl";

  const DialogEntry = ({ title, text }: { title: string; text: string }) => {
    return (
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-brand-white-100 opacity-80">{text}</p>
      </div>
    );
  };

  return (
    <div className="absolute top-6 right-6 flex flex-col items-end gap-3">
      <button className={classes} onClick={handleClick}>
        {open ? <X size={24} /> : <List size={24} />}
      </button>
      {open && (
        <div
          className={`${classes} flex flex-col gap-4 rounded-3xl p-7 shadow-info-dialog`}
        >
          <DialogEntry title="Podiums" text="20" />
          <DialogEntry title="Points" text="779" />
          <DialogEntry title="Grands Prix entered" text="97" />
          <DialogEntry title="World Championships" text="0" />
          <DialogEntry title="Highest race finish" text="1 (x5)" />
          <DialogEntry title="Highest grid position" text="1" />
        </div>
      )}
    </div>
  );
};
