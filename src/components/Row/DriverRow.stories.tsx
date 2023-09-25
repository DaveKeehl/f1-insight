import type { Meta, StoryObj } from "@storybook/react";

import DriverRow from "./DriverRow";

const meta = {
  title: "Components/DriverRow",
  component: DriverRow,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof DriverRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 1,
    team: {
      name: "Red Bull",
      ref: "red_bull"
    },
    name: "Max",
    lastname: "Verstappen",
    value: "1:29.708 (Q3)"
  }
};
