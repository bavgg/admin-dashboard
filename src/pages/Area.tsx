import { ResponsiveAreaBump } from "@nivo/bump";
import { areaChartData } from "../data/data";
// type AreaProps = {
//   data: {
//     id: string;
//     data: {
//       x: number;
//       y: number;
//     }[];
//   }[];
// };
function Area() {
  return (
    <div className="h-[500px]">
      <ResponsiveAreaBump
        data={areaChartData}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={({ id }: { id: string }) => {
          const colorMap: Record<string, string> = {
            France: "#6ee7b7",
            USA: "#67e8f9",
            Germany: "#f9a8d4",
            test: "#86efac",
          };
          return colorMap[id];
        }}
        blendMode="multiply"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "CoffeeScript",
            },
            id: "dots",
          },
          {
            match: {
              id: "TypeScript",
            },
            id: "lines",
          },
        ]}
        // startLabel="id"
        // endLabel="id"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
          truncateTickAt: 0,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
      />
    </div>
  );
}

export default Area;
