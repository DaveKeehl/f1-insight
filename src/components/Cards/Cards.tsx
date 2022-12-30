import { useAtomValue } from "jotai";

import { cardsVisible } from "@utils/atoms";

interface ICards<T> {
  data: T[];
  renderCard: (card: T) => React.ReactNode;
  keyExtractor: (card: T) => string;
}

export const Cards = <T,>({ data, renderCard, keyExtractor }: ICards<T>) => {
  const visible = useAtomValue(cardsVisible);

  const padding = visible ? "py-5 md:px-5" : "py-0 md:px-0 md:py-5";
  const width = visible
    ? "h-[185px] md:h-fit md:w-[294px]"
    : "h-0 md:w-0 md:h-fit";

  return (
    <aside
      className={`flex snap-x snap-mandatory shrink-0 gap-3 overflow-scroll border-t-[1px] border-brand-blue-200 bg-brand-blue-300 p-5 md:flex-col md:border-r-[1px] z-[99] shadow-cards no-scrollbar transition-cards duration-500 ${padding} ${width}`}
    >
      {data.map((card) => {
        return (
          <div key={keyExtractor(card)} className="snap-center snap-always">
            {renderCard(card)}
          </div>
        );
      })}
    </aside>
  );
};
