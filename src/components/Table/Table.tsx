import { v4 as uuidv4 } from "uuid";

export default function Table<T>({
  data,
  breakpoint,
  renderItem
}: {
  data: T[];
  breakpoint: "lg" | "2xl";
  renderItem: (item: T) => React.ReactNode;
}) {
  const desktopColumns = breakpoint === "lg" ? "lg:columns-2" : "2xl:columns-2";

  return (
    <div className={`w-full columns-1 gap-[10px] ${desktopColumns}`}>
      {data.map((item) => {
        return <div key={uuidv4()}>{renderItem(item)}</div>;
      })}
    </div>
  );
}
