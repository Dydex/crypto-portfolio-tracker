import React from "react";
import { useState } from "react";
import { Search, Bell } from "lucide-react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [ShowSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  const pageName =
    pathname === "/"
      ? "Home"
      : pathname
          .split("/")
          .filter(Boolean)
          .pop()
          ?.replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <header className="flex justify-between pt-2 pb-2 pr-6 pl-6">
      <div>
        <h1 className="text-xl text-black font-semibold">{pageName}</h1>
      </div>

      <div className="flex gap-6 items-center">
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
      </div>
    </header>
  );
};
export default Header;
