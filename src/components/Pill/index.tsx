export interface IPill {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

export const Pill = ({ text, onClick, selected = false }: IPill) => {
  const background = selected ? "bg-brand-red-200" : "bg-brand-blue-300";
  const border = selected ? "border-brand-red-100" : "border-brand-blue-200";
  const shadow = selected ? "shadow-brand-red" : "";

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={`select-none rounded-[20px] border px-4 py-2 text-center text-xs uppercase hover:cursor-pointer ${background} ${border} ${shadow}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};
