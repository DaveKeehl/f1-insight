import Link from "next/link";
import { usePathname } from "next/navigation";

interface ICard {
  href: string;
  selected: (asPath: string) => boolean;
  className?: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Card({
  href,
  selected,
  children,
  className = "",
  onMouseEnter = () => null,
  onMouseLeave = () => null
}: ICard) {
  const pathname = usePathname();

  const border = selected(pathname) ? "border border-[6px] border-brand-white-100" : "";
  const shadow = selected(pathname) ? "shadow-brand-white" : "";

  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter();
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave();
  };

  return (
    <Link href={href} className="flex h-fit">
      <div
        className={`relative flex h-36 w-64 flex-none flex-col overflow-hidden rounded-2xl text-brand-white-100 transition-all hover:cursor-pointer ${className} ${border} ${shadow}`.trim()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </Link>
  );
}
