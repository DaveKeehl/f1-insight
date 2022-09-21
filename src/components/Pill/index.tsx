interface IPill {
  text: string;
  selected?: boolean;
}

export const Pill = ({ text, selected = false }: IPill) => {
  const background = selected ? "bg-brand-red-200" : "bg-brand-blue-300";
  const border = selected ? "border-brand-red-100" : "border-brand-blue-200";
  const shadow = selected ? "shadow-brand-red" : "";

  return (
    <div
      className={`rounded-[20px] border px-4 py-2 text-center text-xs uppercase ${background} ${border} ${shadow}`}
    >
      {text}
    </div>
  );
};
