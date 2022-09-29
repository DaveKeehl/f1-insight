import { Sidebar } from "@components/Sidebar";

interface ILayout {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: ILayout) => {
  return (
    <main className="flex h-screen w-screen flex-col md:flex-row md:overflow-hidden">
      <Sidebar />
      {children}
    </main>
  );
};
