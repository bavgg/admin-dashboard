import { useContext } from "react";
import { navigation } from "../assets/data";
import { User } from "../assets/icons";
import { SidebarContext } from "../contexts/SidebarContext";

function Sidebar() {
    const context = useContext(SidebarContext);
    if(!context) throw new Error("SidebarContext must be used within a PlayerProvider");
    const { sidebarRef } = context;
  return (
    <div ref={sidebarRef} className=" hidden w-auto h-screen overflow-auto lg:flex flex-col gap-8 p-8 text-gray-500">
        {/* admin */}
        <div className="flex gap-4 items-center pb-4 text-gray-700">
            <User fill="currentColor" width="24" height="24"/>
            <div className="text-lg font-[700]">Admin</div>
        </div>

      {navigation.map((nav) => (
        <div className="flex flex-col gap-4">
          {/* title */}
          <div className=" text-base">{nav.title}</div>

          {/* links */}
          <div className="flex flex-col gap-8 ">
            {nav.links.map((link) => (
              <div className=" flex gap-2 items-center">
                {link.icon}
                <span className="text-lg whitespace-nowrap">{link.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
