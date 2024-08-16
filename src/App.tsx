import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr] h-screen ">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          {/* <Home /> */}
          <Orders />
        </div>
      </div>
    </>
  );
}

export default App;
