import Link from "next/link";
import { useRouter } from "next/router";

interface ICard {
  href: string;
  selected: (asPath: string) => boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ href, selected, children, className = "" }: ICard) => {
  const router = useRouter();
  const { asPath } = router;

  const border = selected(asPath)
    ? "border border-[6px] border-brand-white-100"
    : "";
  const shadow = selected(asPath) ? "shadow-brand-white" : "";

  return (
    <Link href={href}>
      <a>
        <div
          className={`relative flex h-36 w-64 flex-none flex-col overflow-hidden rounded-2xl text-brand-white-100 transition-all hover:cursor-pointer ${className} ${border} ${shadow}`.trim()}
        >
          {children}
        </div>
      </a>
    </Link>
  );
};
