import { Sidebar } from "@components/Sidebar";
import { SEO } from "@components/SEO";

interface ILayout {
  headTitle: string;
  children: React.ReactNode;
}

export const AppLayout = ({ headTitle, children }: ILayout) => {
  return (
    <>
      <SEO title={headTitle} />
      <main className="flex h-screen w-screen flex-col md:flex-row md:overflow-hidden">
        <Sidebar />
        {children}
      </main>
    </>
  );
};
