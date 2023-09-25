import type { Meta, StoryObj } from "@storybook/react";

import ConstructorRow from "./ConstructorRow";

const meta = {
  title: "Components/ConstructorRow",
  component: ConstructorRow,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ConstructorRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 1,
    team: {
      name: "Red Bull",
      ref: "red_bull"
    },
    value: "1:29.708 (Q3)"
  }
};
