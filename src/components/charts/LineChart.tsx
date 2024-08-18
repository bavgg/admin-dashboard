import { ResponsiveLine } from "@nivo/line";

type LineChartProps = {
  data: { id: string; data: { x: string; y: number }[] }[];
  xTickValues: string[];
  yTickValues: number[]
};
function LineChart({ data, xTickValues, yTickValues }: LineChartProps) {

  return (
    <>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 100, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 36,
          tickValues: xTickValues,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40,
          format: (value: number) => `${value}%`, 
          tickValues: yTickValues,
        }}
        gridXValues={xTickValues}
        gridYValues={yTickValues} // Show grid lines only at tick values
        colors={({ id } : { id: string}) => {
          const colorMap: Record<string, string>= {
            India: '#6ee7b7',
            Germany: '#67e8f9',
            England: '#f9a8d4',
            test: '#86efac'
          };
          return colorMap[id];
        }}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        // enablePointLabel={true}
        pointLabel={(point) => `${point.data.yFormatted}`}
        // enableCrosshair={false}
        // useMesh={true}
        lineWidth={2}
        enableGridX={false}
        enableGridY={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        theme={{
          text: {
            fontWeight: 300,
            color: '#6C7180'
          }
        }}
      />
    </>
  );
}

export default LineChart;
