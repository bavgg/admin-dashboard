import { earningData } from "../assets/data";

function Home() {
  return (
    <div className="bg-gray-100 w-full  p-4">
      {/* hero */}
      <div className="p-8 bg-white">
        <div>Earnings</div>
        <div>$63,223.72</div>
        <button>Download</button>
      </div>

      {/* presentation */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
        {earningData.map(ed => (
          <div className="p-4 bg-white min-w-[">
              <div>{ed.icon}</div>
              <div>{ed.amount}</div>
              <div>{ed.percentage}</div>
              <div>{ed.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
