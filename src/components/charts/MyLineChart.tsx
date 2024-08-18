import React from 'react';
import { ResponsiveLine, LineDatum } from '@nivo/line';

interface DataPoint {
  x: string;
  y: number;
}

const data = [
  {
    id: 'test1',
    data: [
      { x: '2005', y: 21 },
      { x: '2006', y: 24 },
      { x: '2007', y: 36 },
      { x: '2008', y: 38 },
      { x: '2009', y: 54 },
      { x: '2010', y: 57 },
      { x: '2011', y: 70 },
    ],
  },
  {
    id: 'test2',
    data: [
      { x: '2005', y: 28 },
      { x: '2006', y: 44 },
      { x: '2007', y: 48 },
      { x: '2008', y: 50 },
      { x: '2009', y: 66 },
      { x: '2010', y: 78 },
      { x: '2011', y: 84 },
    ],
  },
  {
    id: 'test3',
    data: [
      { x: '2005', y: 10 },
      { x: '2006', y: 20 },
      { x: '2007', y: 30 },
      { x: '2008', y: 39 },
      { x: '2009', y: 50 },
      { x: '2010', y: 70 },
      { x: '2011', y: 100 },
    ],
  },
];

const MyLineChart: React.FC = () => {
  const tickValues = [0, 20, 40, 60, 80, 100]; // Define your tick values

  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Year',
          legendPosition: 'middle',
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Value',
          legendPosition: 'middle',
          legendOffset: -40,
          format: (value: number) => `${value}%`, // Customize Y-axis values
          tickValues: tickValues, // Set specific tick values
        }}
        gridYValues={tickValues} // Show grid lines only at tick values
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        // enablePointLabel={true}
        // pointLabel={(point) => `${point.data.yFormatted}`}
        lineWidth={2}
        enableGridX={false}
        enableGridY={true}
        legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      />
    </div>
  );
};

export default MyLineChart;
