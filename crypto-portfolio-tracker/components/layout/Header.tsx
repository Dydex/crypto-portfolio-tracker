import React from "react";
import { useState } from "react";
import { Search, Bell } from "lucide-react";

const Header: React.FC = () => {
  const [ShowSearch, setShowSearch] = useState(false);
  return (
    <header className="flex gap-6 justify-end p-2">
      <div className="flex cursor-pointer items-center">
        <input
          type="text"
          placeholder="Search"
          className={`border rounded-md text-gray-700 outline-none px-2 py-1 text-sm  ${
            !ShowSearch && "hidden"
          }`}
        />
        <Search
          size={20}
          className="text-gray-600"
          onClick={() => setShowSearch(!ShowSearch)}
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
