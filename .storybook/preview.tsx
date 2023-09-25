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
    backgrounds: {
      default: "black",
      values: [
        {
          name: "light",
          value: "#ffffff"
        },
        {
          name: "dark",
          value: "#333333"
        },
        {
          name: "black",
          value: "#060609"
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <div className={`${inter.variable} ${f1.variable} p-4 font-sans text-white`}>
        <Story />
      </div>
    )
  ]
};

export default preview;
