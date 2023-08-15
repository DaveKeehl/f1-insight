import { useAtom } from "jotai";
import { CaretLeft } from "@phosphor-icons/react";

import { cardsVisible } from "@/utils/atoms";

export default function CardsTrigger() {
  const [visible, setVisible] = useAtom(cardsVisible);

  const handleClick = () => setVisible((prev) => !prev);

  const bottom = visible ? "bottom-[266px]" : "bottom-[82px]";

  const arrowRotation = visible ? "-rotate-90 md:rotate-0" : "rotate-90 md:rotate-180";

  return (
    <div
      className={`fixed z-20 h-10 w-10 border border-brand-blue-200 bg-brand-blue-300 md:absolute ${bottom} left-1/2 grid -translate-x-1/2 place-items-center rounded-full transition-all duration-500 hover:cursor-pointer hover:bg-brand-blue-200 md:left-4 md:top-4 md:translate-x-0 ${arrowRotation} shadow-cards`}
      onClick={handleClick}
    >
      <CaretLeft size={22} weight="bold" />
    </div>
  );
}
