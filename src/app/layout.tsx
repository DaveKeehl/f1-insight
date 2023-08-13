import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Sidebar from "@/components/Sidebar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "F1 Insight - %s",
    default: "F1 Insight"
  },
  description: "A web application to gather insight into the current Formula 1 season",
  openGraph: {
    title: "F1 Insight",
    description: "A web application to gather insight into the current Formula 1 season",
    url: "https://f1-insight.com",
    siteName: "F1 Insight",
    images: [
      {
        url: "/og-image.png",
        width: 3480,
        height: 1920
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen w-screen flex-col-reverse md:flex-row md:overflow-hidden">
          <Sidebar />
          <div className="flex flex-auto bg-brand-blue-400 text-white">{children}</div>
        </main>
      </body>
    </html>
  );
}
