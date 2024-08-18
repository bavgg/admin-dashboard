import { useContext, useState } from "react";
import { links } from "../data/data";
import { User } from "../assets/icons";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";

function Sidebar() {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("SidebarContext must be used within a PlayerProvider");
  const { sidebarRef } = context;

  const [ selectedLink, setSelectedLink ] = useState('');

  function handleLink(link: string) {
    setSelectedLink(link)
  }
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
        <div key={link.title} className="flex flex-col gap-4">
          {/* title */}
          <div className=" text-base">{link.title}</div>

          {/* links */}
          <div className="flex flex-col gap-8 ">
            {link.links.map((link) => (
              <Link onClick={() => handleLink(link.name)} to={link.path}>
                <div key={link.name} className={ `${selectedLink === link.name && 'bg-sky-400 text-white'} rounded-md cursor-pointer py-1 flex gap-2 items-center justify-center`}>
                  <div>{link.icon}</div>
                
                  <span className=" whitespace-nowrap">{link.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
