interface ICards<T> {
  data: T[];
  renderCard: (card: T) => React.ReactNode;
}

export const Cards = <T,>({ data, renderCard }: ICards<T>) => {
  return (
    <aside className="flex flex-col gap-3 overflow-scroll bg-brand-blue-300 p-5">
      {data.map((card) => {
        return <>{renderCard(card)}</>;
      })}
    </aside>
  );
};
