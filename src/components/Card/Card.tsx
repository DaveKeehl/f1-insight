import Link from "next/link";

interface ICard {
  href: string;
  children: React.ReactNode;
}

export const Card = ({ href, children }: ICard) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};
