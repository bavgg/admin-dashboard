import { useContext } from "react";
import {
  Bell,
  ChatBubble,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "../assets/icons";
import { SidebarContext } from "../contexts/SidebarContext";


function Navbar() {
    const context = useContext(SidebarContext);
    if(!context) throw new Error("SidebarContext must be used within a PlayerProvider");
    const { sidebarRef } = context;

  function handleMenu() {
    // set the sidebar component style display toggle into none or flex
    const sidebarElement = sidebarRef.current;
    if (sidebarElement && sidebarElement.style.width !== '0px') {
        console.log(sidebarElement.style.width);

        sidebarElement.style.width = '0'; 
        sidebarElement.style.padding = 'unset'; 
    }else if(sidebarElement && sidebarElement.style.width === '0px') {
        sidebarElement.style.width = 'auto'; 
        sidebarElement.style.padding = '2rem'; 
    }
  }
  return (
    <div className="text-gray-500 p-8 w-screen h-20 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div onClick={handleMenu} className=" cursor-pointer">
          <Menu fill="currentColor" width="24" height="24" />
        </div>
        <div className="p-2 rounded-full border-gray-100 border">
          <Search fill="white" width="24" height="24" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="p-2 rounded-full border-gray-100 border">
          <ShoppingCart fill="white" width="24" height="24" />
        </div>
        <div className="relative p-2 rounded-full border-gray-100 border">
          <div className="absolute top-0 right-0 bg-sky-400 h-3 w-3 rounded-full"></div>
          <ChatBubble fill="white" width="24" height="24" />
        </div>
        <div className="relative p-2 rounded-full border-gray-100 border">
          <Bell fill="white" width="24" height="24" />
          <div className="absolute top-0 right-0 bg-sky-400 h-3 w-3 rounded-full"></div>
        </div>
        <User fill="currentColor" width="42" height="42" />
      </div>
    </div>
  );
}

export default Navbar;
