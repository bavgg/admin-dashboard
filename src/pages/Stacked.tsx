import { ResponsiveBar } from "@nivo/bar";
import { BarchartData } from "../data/data";

function Stacked() {
  return <div className="h-[500px]">
    <div>Chart</div>
    <div className=" text-3xl font-[500]">Stacked</div>
    <div className="flex justify-center text-xl">Revenue Breakdown</div>
    <ResponsiveBar
        data={BarchartData}
        keys={["Budget", "Expense"]}
        indexBy="month"
        margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
        padding={0.5}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={({ id }) => id === "Budget" ? "#FDA5A5" : "#7ED3FC"}

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
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        //   tickValues: tickValues,
        }}
        enableLabel={false}

        // gridYValues={tickValues}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 10,
            translateY: 80,
            itemWidth: 0,
            itemHeight: 26,
            itemsSpacing: 0,
            symbolSize: 20,
            itemDirection: "left-to-right",
            
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
        theme={
          {
            "text": {
              "fontWeight": 300,
              "fontSize": 11,
              "fill": "#6C7180",
              "outlineWidth": 0,
              "outlineColor": "transparent"
            },
          }
        }
      />
  </div>;
}

export default Stacked;
