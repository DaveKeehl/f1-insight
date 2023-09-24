import type { Meta, StoryObj } from "@storybook/react";

import Row from "./index";

const meta = {
  title: "Components/Row",
  component: Row,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Max Verstappen",
    team: "Red Bull",
    position: "1",
    target: "driver",
    value: "100 points"
  }
};
