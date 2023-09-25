import type { Meta, StoryObj } from "@storybook/react";

import ConstructorsTable from "./ConstructorsTable";

const meta = {
  title: "Components/ConstructorsTable",
  component: ConstructorsTable,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ConstructorsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: [
      {
        position: 1,
        team: {
          name: "Red Bull",
          ref: "red_bull"
        },
        value: "1:11:111"
      },
      {
        position: 2,
        team: {
          name: "Ferrari",
          ref: "ferrari"
        },
        value: "1:11:111"
      },
      {
        position: 3,
        team: {
          name: "McLaren",
          ref: "mclaren"
        },
        value: "1:11:111"
      },
      {
        position: 4,
        team: {
          name: "Mercedes",
          ref: "mercedes"
        },
        value: "1:11:111"
      },
      {
        position: 5,
        team: {
          name: "Aston Martin",
          ref: "aston_martin"
        },
        value: "1:11:111"
      },
      {
        position: 6,
        team: {
          name: "Alpine",
          ref: "alpine"
        },
        value: "1:11:111"
      },
      {
        position: 7,
        team: {
          name: "Williams",
          ref: "williams"
        },
        value: "1:11:111"
      },
      {
        position: 8,
        team: {
          name: "AlphaTauri",
          ref: "alphatauri"
        },
        value: "1:11:111"
      },
      {
        position: 9,
        team: {
          name: "Alfa Romeo",
          ref: "alfa"
        },
        value: "1:11:111"
      },
      {
        position: 10,
        team: {
          name: "Haas",
          ref: "haas"
        },
        value: "1:11:111"
      }
    ]
  }
};
