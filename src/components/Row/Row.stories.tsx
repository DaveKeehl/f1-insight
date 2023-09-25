import type { Meta, StoryObj } from "@storybook/react";

import Row from ".";

const meta = {
  title: "Components/Row",
  component: Row,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 1,
    constructorRef: "red_bull",
    slots: {
      start: (
        <p>
          Max <strong>Verstappen</strong>
        </p>
      ),
      end: <p>100 points</p>
    }
  }
};
