import type { Meta, StoryObj } from "@storybook/react";

import DriversTable from "./DriversTable";

const meta = {
  title: "Components/DriversTable",
  component: DriversTable,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof DriversTable>;

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
        name: "Max",
        lastname: "Verstappen",
        value: "1:11:111"
      },
      {
        position: 2,
        team: {
          name: "Red Bull",
          ref: "red_bull"
        },
        name: "Sergio",
        lastname: "Perez",
        value: "1:11:111"
      },
      {
        position: 3,
        team: {
          name: "Ferrari",
          ref: "ferrari"
        },
        name: "Charles",
        lastname: "Leclerc",
        value: "1:11:111"
      },
      {
        position: 4,
        team: {
          name: "Ferrar",
          ref: "ferrari"
        },
        name: "Carlos",
        lastname: "Sainz",
        value: "1:11:111"
      },
      {
        position: 5,
        team: {
          name: "McLaren",
          ref: "mclaren"
        },
        name: "Lando",
        lastname: "Norris",
        value: "1:11:111"
      },
      {
        position: 6,
        team: {
          name: "McLaren",
          ref: "mclaren"
        },
        name: "Oscar",
        lastname: "Piastri",
        value: "1:11:111"
      },
      {
        position: 7,
        team: {
          name: "Mercedes",
          ref: "mercedes"
        },
        name: "Lewis",
        lastname: "Hamilton",
        value: "1:11:111"
      },
      {
        position: 8,
        team: {
          name: "Mercedes",
          ref: "mercedes"
        },
        name: "George",
        lastname: "Russell",
        value: "1:11:111"
      },
      {
        position: 9,
        team: {
          name: "Aston Martin",
          ref: "aston_martin"
        },
        name: "Fernando",
        lastname: "Alonso",
        value: "1:11:111"
      },
      {
        position: 10,
        team: {
          name: "Aston Martin",
          ref: "aston_martin"
        },
        name: "Lance",
        lastname: "Stroll",
        value: "1:11:111"
      },
      {
        position: 11,
        team: {
          name: "Alpine",
          ref: "alpine"
        },
        name: "Pierre",
        lastname: "Gasly",
        value: "1:11:111"
      },
      {
        position: 12,
        team: {
          name: "Alpine",
          ref: "alpine"
        },
        name: "Esteban",
        lastname: "Ocon",
        value: "1:11:111"
      },
      {
        position: 13,
        team: {
          name: "Williams",
          ref: "williams"
        },
        name: "Alex",
        lastname: "Albon",
        value: "1:11:111"
      },
      {
        position: 14,
        team: {
          name: "Williams",
          ref: "williams"
        },
        name: "Logan",
        lastname: "Sargeant",
        value: "1:11:111"
      },
      {
        position: 15,
        team: {
          name: "AlphaTauri",
          ref: "alphatauri"
        },
        name: "Yuki",
        lastname: "Tsunoda",
        value: "1:11:111"
      },
      {
        position: 16,
        team: {
          name: "AlphaTauri",
          ref: "alphatauri"
        },
        name: "Liam",
        lastname: "Lawson",
        value: "1:11:111"
      },
      {
        position: 17,
        team: {
          name: "Alfa Romeo",
          ref: "alfa"
        },
        name: "Valtteri",
        lastname: "Bottas",
        value: "1:11:111"
      },
      {
        position: 18,
        team: {
          name: "Alfa Romeo",
          ref: "alfa"
        },
        name: "Guanyu",
        lastname: "Zhou",
        value: "1:11:111"
      },
      {
        position: 19,
        team: {
          name: "Haas",
          ref: "haas"
        },
        name: "Kevin",
        lastname: "Magnussen",
        value: "1:11:111"
      },
      {
        position: 20,
        team: {
          name: "Haas",
          ref: "haas"
        },
        name: "Nico",
        lastname: "Hülkenberg",
        value: "1:11:111"
      }
    ]
  }
};
