import "./App.css";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Sidebar from "./components/Sidebar";
import Area from "./pages/Area";
import Bar from "./pages/Bar";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import Home from "./pages/Home";
import Line from "./pages/Line";
import Orders from "./pages/Orders";

import { Route, Routes } from "react-router-dom";
import Pie from "./pages/Pie";
import ColorMapping from "./pages/ColorMapping";
import Stacked from "./pages/Stacked";

function App() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr] h-screen ">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />

          <div className="p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/line" element={<Line />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/area" element={<Area  />} />
              <Route path="/bar" element={<Bar  />} />
              <Route path="/pie" element={<Pie  />} />
              <Route path="/color" element={<ColorMapping  />} />
              <Route path="/stacked" element={<Stacked  />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
