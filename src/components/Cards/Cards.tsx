interface ICards<T> {
  data: T[];
  renderCard: (card: T) => React.ReactNode;
  keyExtractor: (card: T) => string;
}

export const Cards = <T,>({ data, renderCard, keyExtractor }: ICards<T>) => {
  return (
    <aside className="flex gap-3 overflow-scroll border-r-[1px] border-brand-blue-200 bg-brand-blue-300 p-5 md:flex-col">
      {data.map((card) => {
        return <div key={keyExtractor(card)}>{renderCard(card)}</div>;
      })}
    </aside>
  );
};
