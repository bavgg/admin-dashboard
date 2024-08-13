import { navigation } from "../assets/data";

function Sidebar() {
  return (
    <div className="h-screen overflow-auto flex flex-col gap-4 p-8">
      {navigation.map((nav) => (
        <div className="flex flex-col gap-4">
          {/* title */}
          <h1>{nav.title}</h1>

          {/* links */}
          <div className="flex flex-col gap-6">
            {nav.links.map((link) => (
              <div className=" flex gap-4 pl-4">
                {link.icon}
                <div>{link.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
