import { useAtom } from "jotai";
import { CaretLeft } from "phosphor-react";

import { cardsVisible } from "@utils/atoms";

export const CardsTrigger = () => {
  const [visible, setVisible] = useAtom(cardsVisible);

  const handleClick = () => setVisible((prev) => !prev);

  const bottom = visible ? "bottom-[266px]" : "bottom-[82px]";

  const arrowRotation = visible
    ? "-rotate-90 md:rotate-0"
    : "rotate-90 md:rotate-180";

  return (
    <div
      className={`fixed md:absolute z-20 w-10 h-10 bg-brand-blue-300 border border-brand-blue-200 ${bottom} md:top-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-4 rounded-full grid place-items-center hover:cursor-pointer hover:bg-brand-blue-200 transition-all duration-500 ${arrowRotation} shadow-cards`}
      onClick={handleClick}
    >
      <CaretLeft size={22} weight="bold" />
    </div>
  );
};
