import { v4 as uuidv4 } from "uuid";

interface ICards<T> {
  data: T[];
  renderCard: (card: T) => React.ReactNode;
}

export const Cards = <T,>({ data, renderCard }: ICards<T>) => {
  return (
    <aside className="flex flex-col gap-3 overflow-scroll bg-brand-blue-300 p-5">
      {data.map((card) => {
        return <div key={uuidv4()}>{renderCard(card)}</div>;
      })}
    </aside>
  );
};
