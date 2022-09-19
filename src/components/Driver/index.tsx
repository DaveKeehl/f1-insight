import { useState } from "react";
import Image from "next/future/image";
import { X, List } from "phosphor-react";
import { ResponsiveLine } from "@nivo/line";
import { capitalize } from "lodash";

import { DriverBadge } from "../DriverBadge";

interface IDriver {
  name: string;
  lastname: string;
  team: string;
  permanentNumber: number;
  nationality: string;
}

const data = [
  {
    id: "verstappen",
    color: "hsl(70, 70%, 50%)",
    data: [
      {
        x: "1 - Bahrain",
        y: 20,
      },
      {
        x: "2 - Saudi Arabia",
        y: 2,
      },
      {
        x: "3 - Australia",
        y: 20,
      },
      {
        x: "4 - Italy",
        y: 1,
      },
      {
        x: "5 - United States",
        y: 1,
      },
      {
        x: "6 - Spain",
        y: 1,
      },
      {
        x: "7 - Monaco",
        y: 3,
      },
      {
        x: "8 - Azerbaijan",
        y: 1,
      },
      {
        x: "9 - Canada",
        y: 1,
      },
      {
        x: "10 - Great Britain",
        y: 20,
      },
      {
        x: "11 - Austria",
        y: 2,
      },
      {
        x: "12 - France",
        y: 1,
      },
      {
        x: "13 - Hungary",
        y: 1,
      },
      {
        x: "14 - Belgium",
        y: 1,
      },
      {
        x: "15 - Netherlands",
        y: 1,
      },
      {
        x: "16 - Italy",
        y: 1,
      },
    ],
  },
];

const InfoDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  const classes =
    "rounded-xl border-2 border-brand-white-100/10 bg-brand-white-100/5 p-2 backdrop-blur-2xl";

  const DialogEntry = ({ title, text }: { title: string; text: string }) => {
    return (
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-brand-white-100 opacity-80">{text}</p>
      </div>
    );
  };

  return (
    <div className="absolute top-6 right-6 flex flex-col items-end gap-3">
      <button className={classes} onClick={handleClick}>
        {open ? <X size={24} /> : <List size={24} />}
      </button>
      {open && (
        <div
          className={`${classes} flex flex-col gap-4 rounded-3xl p-7 shadow-info-dialog`}
        >
          <DialogEntry title="Podiums" text="20" />
          <DialogEntry title="Points" text="779" />
          <DialogEntry title="Grands Prix entered" text="97" />
          <DialogEntry title="World Championships" text="0" />
          <DialogEntry title="Highest race finish" text="1 (x5)" />
          <DialogEntry title="Highest grid position" text="1" />
        </div>
      )}
    </div>
  );
};

interface ILineChart {
  data: {
    id: string;
    color: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
}

const LineChart = ({ data }: ILineChart) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 30, bottom: 110, left: 70 }}
      colors={{ scheme: "blues" }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 1,
        max: "auto",
        stacked: true,
        reverse: true,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Rank",
        legendOffset: -45,
        legendPosition: "middle",
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -40,
        legend: "Race",
        legendOffset: 85,
        legendPosition: "middle",
      }}
      pointSize={7}
      pointColor={{ from: "color" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "color" }}
      useMesh={true}
      enableSlices="x"
      enableGridY={false}
      theme={{
        background: "#060609",
        textColor: "#454554",
        fontSize: 11,
        axis: {
          domain: {
            line: {
              stroke: "#242433",
              strokeWidth: 1,
            },
          },
          ticks: {
            line: {
              stroke: "#242433",
              strokeWidth: 0,
            },
            text: {
              fontSize: 11,
              fill: "#454554",
            },
          },
        },
        grid: {
          line: {
            stroke: "#242433",
            strokeWidth: 1,
          },
        },
      }}
      sliceTooltip={({ slice }) => {
        return (
          <div className=" flex flex-col gap-1 rounded-lg border border-brand-white-100/10 bg-brand-blue-200 px-5 py-3 shadow-xl">
            <p className="text-sm font-medium">
              {slice.points[0]?.data.xFormatted}
            </p>
            {slice.points.map((point) => (
              <p className="text-sm" key={point.id}>
                Rank: {point.data.yFormatted}
              </p>
            ))}
          </div>
        );
      }}
    />
  );
};

const DriverData = ({
  name,
  lastname,
  team,
  permanentNumber,
  nationality,
}: IDriver) => {
  const clean = {
    team: team.toLowerCase().replace(/\s/g, ""),
  };

  const shadow: { [key: string]: string } = {
    alfaromeo: "shadow-alfaromeo",
    alphatauri: "shadow-alphatauri",
    alpine: "shadow-alpine",
    astonmartin: "shadow-astonmartin",
    ferrari: "shadow-ferrari",
    haas: "shadow-haas",
    mclaren: "shadow-mclaren",
    mercedes: "shadow-mercedes",
    redbull: "shadow-redbull",
    williams: "shadow-williams",
  };

  const gradient: { [key: string]: string } = {
    alfaromeo: "from-[#360C14] via-teams-alfaromeo to-[#360C14]",
    alphatauri: "from-[#1E3039] via-teams-alphatauri to-[#1E3039]",
    alpine: "from-[#0A2839] via-teams-alpine to-[#0A2839]",
    astonmartin: "from-[#123028] via-teams-astonmartin to-[#123028]",
    ferrari: "from-[#3D0108] via-teams-ferrari to-[#3D0108]",
    haas: "from-[#383B3E] via-teams-haas to-[#383B3E]",
    mclaren: "from-[#452003] via-teams-mclaren to-[#452003]",
    mercedes: "from-[#0F332C] via-teams-mercedes to-[#0F332C]",
    redbull: "from-[#0F2038] via-teams-redbull to-[#0F2038]",
    williams: "from-[#0B343D] via-teams-williams to-[#0B343D]",
  };

  return (
    <div
      className={`relative flex-none overflow-hidden rounded-[40px] ${
        shadow[clean.team]
      }`}
    >
      <div className="relative z-10 p-[5px]">
        <div className="relative z-10">
          <DriverBadge
            number={permanentNumber}
            country={nationality}
            className="absolute top-6 left-6"
          />
          <InfoDialog />
        </div>
        <div className="relative overflow-hidden rounded-[35px]">
          <div className="relative h-[525px] w-[788px]">
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-brand-blue-400" />
            <Image
              src={`/drivers/front/${name}-${lastname}.jpeg`}
              alt=""
              width={1920}
              height={1920}
              className="h-full w-full flex-none object-cover object-top"
            />
          </div>
          <div className="h-80 w-full bg-brand-blue-400">
            <LineChart data={data} />
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-gradient-to-b ${
          gradient[clean.team]
        }`}
      />
    </div>
  );
};

export const Driver = (props: IDriver) => {
  const { name, lastname, team } = props;

  return (
    <div className="flex flex-auto flex-col items-center gap-10 overflow-scroll bg-brand-blue-400 px-14 py-12 text-brand-white-100">
      <Image src="/f1_logo.svg" alt="" width={120} height={30} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[40px] font-medium text-brand-white-100">
          {capitalize(name)} {capitalize(lastname)}
        </h1>
        <p className="text-center text-base font-medium uppercase text-brand-blue-100 opacity-70">
          {team}
        </p>
      </div>
      <DriverData {...props} />
    </div>
  );
};
