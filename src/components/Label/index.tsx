interface ILabel {
  text: string;
  className?: string;
}

export const Label = ({ text, className }: ILabel) => {
  return (
    <div
      className={`${className} rounded-full border border-brand-blue-300 bg-brand-blue-400 px-[10px] py-1 text-xs uppercase`.trim()}
    >
      {text}
    </div>
  );
};
