import { ResponsiveLine } from "@nivo/line";


type LineChartProps = {
  data: { id: string; color: string; data: { x: number; y: number }[] }[];
};
function LineChart({ data }: LineChartProps) {
  return (
    <div className="rounded-md w-[500px] bg-white mt-4 text-sky-400">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors='#7ED3FC'
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableCrosshair={false}
        useMesh={true}
        legends={[]}
    />
    </div>
  );
}

export default LineChart;
