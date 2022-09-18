import { Sidebar } from "../Sidebar";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      {children}
    </main>
  );
};
