import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Sidebar from "@/components/Sidebar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "F1 Insights - %s",
    default: "F1 Insight"
  },
  description: "A web application to gather insight into the current Formula 1 season"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen w-screen flex-col-reverse md:flex-row md:overflow-hidden">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
