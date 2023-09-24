import React from "react";
import type { Preview } from "@storybook/react";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "../src/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const f1 = localFont({
  src: [
    {
      path: "../src/app/fonts/Formula1-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../src/app/fonts/Formula1-Bold.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../src/app/fonts/Formula1-Wide.otf",
      weight: "600",
      style: "normal"
    }
  ],
  variable: "--font-f1"
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <div className={`${inter.variable} ${f1.variable}`}>
        <Story />
      </div>
    )
  ]
};

export default preview;
