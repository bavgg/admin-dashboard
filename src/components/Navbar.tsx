import {
  Bell,
  ChatBubble,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "../assets/icons";

function Navbar() {
  return (
    <div className="text-gray-500 p-8 w-screen h-20 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Menu fill="currentColor" width="24" height="24" />
        <div className="p-2 rounded-full border-gray-100 border">
          <Search fill="white" width="24" height="24" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="p-2 rounded-full border-gray-100 border">
          <ShoppingCart fill="currentColor" width="24" height="24" />
        </div>
        <div className="p-2 rounded-full border-gray-100 border">
          <ChatBubble fill="currentColor" width="24" height="24" />
        </div>
        <div className="p-2 rounded-full border-gray-100 border">
          <Bell fill="currentColor" width="24" height="24" />
        </div>
        <User fill="currentColor" width="42" height="42" />
      </div>
    </div>
  );
}

export default Navbar;
