import Header from "./Header";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Wallet,
  LineChart,
  ArrowLeftRight,
  PieChart,
} from "lucide-react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-screen">
        <div
          className={`bg-white text-gray-900 transition-all duration-300 flex flex-col gap-10 pr-4 pl-4 ${
            IsOpen ? "w-64" : "w-14"
          }`}
        >
          <div className="flex justify-between p-2 border-b border-gray-300 ">
            <h1 className={`font-bold text-lg ${!IsOpen && "hidden"}`}>FinX</h1>
            <button
              className="cursor-pointer"
              onClick={() => setIsOpen(!IsOpen)}
            >
              {IsOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <nav className="flex flex-col gap-4 pl-4 pr-4">
            <Link
              href="/"
              className={`flex px-1 py-3 rounded-md hover:bg-blue-500  transition  block flex gap-2 px-4 py-2 font-semibold  ${
                !IsOpen && "hidden"
              } `}
            >
              <Home size={24} />
              <p className="hover:text-blue">Home </p>
            </Link>
            <Link
              href="/porfolio"
              className={`flex px-1 py-3 rounded-md hover:bg-blue-500 hover:text-blue transition block  flex gap-2 px-4 py-2 font-semibold  ${
                !IsOpen && "hidden"
              }`}
            >
              <PieChart size={24} />
              Porfolio
            </Link>
            <Link
              href="transaction"
              className={`flex px-1 py-3 rounded-md hover:bg-blue-500 hover:text-blue transition  block flex gap-2 px-4 py-2 font-semibold  ${
                !IsOpen && "hidden"
              }`}
            >
              <ArrowLeftRight size={24} />
              Transactions
            </Link>
            <Link
              href="wallet"
              className={`flex px-1 py-3 rounded-md hover:bg-blue-500 hover:text-blue transition  block  flex gap-2 px-4 py-2 font-semibold  ${
                !IsOpen && "hidden"
              }`}
            >
              <Wallet size={24} />
              Wallet
            </Link>
          </nav>
        </div>
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 ">{children}</main>
        </div>
      </div>
    </>
  );
};
export default Layout;
