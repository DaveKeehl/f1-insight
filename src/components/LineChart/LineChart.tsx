import { ResponsiveLine } from "@nivo/line";
import { ColorSchemeId } from "../../../node_modules/@nivo/colors/dist/types/schemes";

interface ILineChart {
  data: {
    id: string;
    data: {
      x: string;
      y: number | null;
    }[];
  }[];
  team: string;
  minY: number;
  maxY: number | "auto";
  legendX: string;
  legendY: string;
}

export const LineChart = ({
  data,
  team,
  minY,
  maxY,
  legendX,
  legendY
}: ILineChart) => {
  const scheme: { [key: string]: { scheme: ColorSchemeId; size: number } } = {
    "Red Bull": { scheme: "paired", size: 9 },
    Alpine: { scheme: "paired", size: 9 },
    AlphaTauri: { scheme: "paired", size: 9 },
    Williams: { scheme: "paired", size: 9 },
    Haas: { scheme: "pastel1", size: 7 },
    Ferrari: { scheme: "spectral", size: 5 },
    "Alfa Romeo": { scheme: "spectral", size: 6 },
    Mercedes: { scheme: "set2", size: 3 },
    "Aston Martin": { scheme: "set2", size: 3 },
    McLaren: { scheme: "brown_blueGreen", size: 5 }
  };

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 40, right: 30, bottom: 110, left: 70 }}
      colors={scheme[team]}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: minY,
        max: maxY,
        stacked: false,
        reverse: true
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legendY,
        legendOffset: -45,
        legendPosition: "middle"
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -40,
        legend: legendX,
        legendOffset: 80,
        legendPosition: "middle"
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
              strokeWidth: 1
            }
          },
          ticks: {
            line: {
              stroke: "#242433",
              strokeWidth: 0
            },
            text: {
              fontSize: 11,
              fill: "#454554"
            }
          }
        },
        grid: {
          line: {
            stroke: "#242433"
          }
        }
      }}
      sliceTooltip={({ slice }) => {
        return (
          <div className=" flex flex-col gap-1 rounded-lg border border-brand-white-100/10 bg-brand-blue-200 px-5 py-3 shadow-xl">
            <p className="text-base font-medium">
              {slice.points[0]?.data.xFormatted}
            </p>
            {[...slice.points].reverse().map((point) => (
              <p className="text-sm" key={point.id}>
                {point.serieId.toString()}: {point.data.yFormatted}
              </p>
            ))}
          </div>
        );
      }}
      legends={[
        {
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: -45,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          itemTextColor: "#C3C3D5",
          padding: 4
        }
      ]}
    />
  );
};
