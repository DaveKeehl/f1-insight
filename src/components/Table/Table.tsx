import { v4 as uuidv4 } from "uuid";

interface ITable<T> {
  data: T[];
  breakpoint: "lg" | "2xl";
  renderItem: (item: T) => React.ReactNode;
}

export const Table = <T,>({ data, breakpoint, renderItem }: ITable<T>) => {
  const desktopColumns = breakpoint === "lg" ? "lg:columns-2" : "2xl:columns-2";

  return (
    <div className={`w-full columns-1 gap-[10px] ${desktopColumns}`}>
      {data.map((item) => {
        return <div key={uuidv4()}>{renderItem(item)}</div>;
      })}
    </div>
  );
};
