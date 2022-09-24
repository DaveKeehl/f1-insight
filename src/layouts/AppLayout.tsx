import { Sidebar } from "@components/Sidebar";

interface ILayout {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: ILayout) => {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      {children}
    </main>
  );
};
