import React from "react";

import { Search, Bell } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="flex">
      <div className="flex">
        <Search size={20} className="text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="border rounded -md px-2 py-1 text-sm outline-none"
        />
      </div>

      <div>
        <Bell size={22} className="text-gray-700 cursor-pointer" />
      </div>

      <div></div>
    </header>
  );
};
export default Header;
