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
          className={`bg-gray-900 text-white transition-all duration-300  ${
            IsOpen ? "w-64" : "w-14"
          }`}
        >
          <div className="flex justify-between p-4 ">
            <h1 className={`font-bold text-lg ${!IsOpen && "hidden"}`}>FinX</h1>
            <button
              className="cursor-pointer"
              onClick={() => setIsOpen(!IsOpen)}
            >
              {IsOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <nav>
            <Link
              href="/"
              className={`block flex gap-2 px-4 py-2 ${!IsOpen && "hidden"} `}
            >
              <Home size={24} />
              Home
            </Link>
            <Link
              href="/porfolio"
              className={`block  flex gap-2 px-4 py-2 ${!IsOpen && "hidden"}`}
            >
              <PieChart size={24} />
              Porfolio
            </Link>
            <Link
              href="transaction"
              className={`block flex gap-2 px-4 py-2 ${!IsOpen && "hidden"}`}
            >
              <ArrowLeftRight size={24} />
              Transactions
            </Link>
            <Link
              href="wallet"
              className={`block  flex gap-2 px-4 py-2 ${!IsOpen && "hidden"}`}
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
