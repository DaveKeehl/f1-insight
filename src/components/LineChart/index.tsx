import { ResponsiveLine } from "@nivo/line";

interface ILineChart {
  data: {
    id: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
  team: string;
}

export const LineChart = ({ data, team }: ILineChart) => {
  const scheme: { [key: string]: any } = {
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
      margin={{ top: 20, right: 30, bottom: 110, left: 70 }}
      colors={scheme[team]}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 1,
        max: "auto",
        stacked: false,
        reverse: true
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Position",
        legendOffset: -45,
        legendPosition: "middle"
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -40,
        legend: "Race",
        legendOffset: 85,
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
        const reversedSlices = slice.points.reverse();

        return (
          <div className=" flex flex-col gap-1 rounded-lg border border-brand-white-100/10 bg-brand-blue-200 px-5 py-3 shadow-xl">
            <p className="text-base font-medium">
              {slice.points[0]?.data.xFormatted}
            </p>
            {reversedSlices.map((point) => (
              <p className="text-sm" key={point.id}>
                {point.serieId.toString()}: {point.data.yFormatted}
              </p>
            ))}
          </div>
        );
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 0,
          translateY: -20,
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
