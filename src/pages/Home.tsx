import { earningData, LineChartData } from "../data/data";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";

function Home() {
  return (
    <div className="bg-gray-100 w-full  p-4 font-[300] text-base text-[#6C7180]">
      {/* hero */}
      <div className="p-8 bg-white rounded-md">
        <div>Earnings</div>
        <div>$63,223.72</div>
        <button className="bg-sky-400 px-2 rounded-md mt-4 text-white">Download</button>
      </div>

      {/*  */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 rounded-md">
        {earningData.map((ed) => (
          <div key={ed.title} className="p-4 rounded-md bg-white min-w-[">
            <div style={{ backgroundColor: ed.iconBg}} className={`p-2 w-fit rounded-full border-gray-100 border`}>
              <div style={{ color: ed.iconColor }}>{ed.icon}</div>
            </div>
            <div className="flex gap-1">
              <div>{ed.amount}</div>
              <div>{ed.percentage}</div>
            </div>
            <div>{ed.title}</div>
          </div>
        ))}
      </div>

      {/* revenue */}
      <div className="flex gap-4 h-[300px]">
        <LineChart data={LineChartData} />
        <BarChart />
      </div>
    </div>
  );
}

export default Home;
