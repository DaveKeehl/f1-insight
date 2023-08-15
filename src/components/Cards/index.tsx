"use client";

import { useAtomValue } from "jotai";

import { cardsVisible } from "@/utils/atoms";

interface ICards<T> {
  data: T[];
  renderCard: (card: T) => React.ReactNode;
  keyExtractor: (card: T) => string;
}

export default function Cards<T>({ data, renderCard, keyExtractor }: ICards<T>) {
  const visible = useAtomValue(cardsVisible);

  const padding = visible ? "py-5 md:px-5" : "py-0 md:px-0 md:py-5";
  const width = visible ? "h-[185px] md:h-auto md:w-[294px]" : "h-0 md:w-0 md:h-fit";

  return (
    <aside
      className={`no-scrollbar z-[99] flex shrink-0 snap-x snap-mandatory gap-3 overflow-scroll border-t-[1px] border-brand-blue-200 bg-brand-blue-300 p-5 shadow-cards transition-cards duration-500 md:flex-col md:border-r-[1px] ${padding} ${width}`}
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
}
