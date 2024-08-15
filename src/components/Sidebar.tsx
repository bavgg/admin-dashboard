import { useContext } from "react";
import { links } from "../assets/data";
import { User } from "../assets/icons";
import { SidebarContext } from "../contexts/SidebarContext";

function Sidebar() {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("SidebarContext must be used within a PlayerProvider");
  const { sidebarRef } = context;
  return (
    <div
      ref={sidebarRef}
      className=" shrink-0 hidden w-fit h-screen overflow-auto lg:flex flex-col gap-8 p-8 text-[#6C7180] font-[300] text-base"
    >
      {/* admin */}
      <div className="flex gap-4 items-center pb-4 text-gray-700">
        <User fill="currentColor" width="24" height="24" />
        <div className="text-lg font-[700]">Admin</div>
      </div>

      {links.map((link) => (
        <div className="flex flex-col gap-4">
          {/* title */}
          <div className=" text-base">{link.title}</div>

          {/* links */}
          <div className="flex flex-col gap-8 ">
            {link.links.map((link) => (
              <div className=" flex gap-2 items-center">
                <div>{link.icon}</div>

                <span className=" whitespace-nowrap">{link.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
