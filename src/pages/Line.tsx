import LineChart from "../components/charts/LineChart";
import { lineChartData } from "../data/data";

function Line() {
  const yTickValues = [0, 20, 40, 60, 80, 100 ];
  const xTickValues = ['2005', '2006', '2007', '2008', '2009', '2010', '2011' ];
  return (
    <div className="grid grid-cols-1">
      <div className="rounded-md  bg-white mt-4 text-sky-400 h-[500px]">
        <LineChart data={lineChartData} xTickValues={xTickValues} yTickValues={yTickValues}/>
      </div>
    </div>
  );
}

export default Line;
