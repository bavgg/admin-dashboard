import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className=" flex h-screen">
        <Sidebar />
        <Navbar />
      </div>
    </>
  );
}

export default App;
