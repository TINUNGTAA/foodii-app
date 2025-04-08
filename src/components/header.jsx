import { useState } from "react";
import assets from "../assets/assets";

function Header() {
  const [menuOpen, setOpen] = useState(false);

  return (
    <section className=" py-6 px-6   lg:px-28">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold bg-green-500 border px-2 rounded-lg text-white">F</span>
          <img src={assets.icon2} alt="icon" />
        </div>

        <div className="hidden lg:flex items-center gap-6 lg:text-xl font-semibold">
          <a href="#" className="hover:text-primary active:text-primary">Home</a>
          <a href="#" className="hover:text-primary active:text-primary">
            Menu <img src={assets.arrowDown} className="inline-block w-3 ml-1" />
          </a>
          <a href="#" className="hover:text-primary active:text-primary">
            Service <img src={assets.arrowDown} className="inline-block w-3 ml-1" />
          </a>
          <a href="#" className="hover:text-primary active:text-primary">Offer</a>
        </div>

        <div className="hidden lg:flex items-center gap-4 relative">
          <img src={assets.search} alt="search" />
          <img src={assets.shoppingBag} alt="bag" />
          <button className="bg-primary flex px-6 py-2 rounded-full text-white">
            <span className="px-3">
              <img src={assets.phoneCall} alt="phone" />
            </span>
            Contact
          </button>
        </div>

        <div className="flex lg:hidden items-center z-12 relative">
          <img
            src={assets.menu}
            alt="menu"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpen(!menuOpen)}
          />

          {menuOpen && (
            <div className="absolute top-full right-0  mt-2 bg-gray-200 p-4 h-70 rounded-lg w-40 shadow-lg  z-50">
              <nav className="flex flex-col gap-2 text-base font-medium text-gray-800">
                <a href="#" className="hover:text-primary text-center">Home</a>
                <a href="#" className="hover:text-primary text-center">Menu</a>
                <a href="#" className="hover:text-primary text-center">Service</a>
                <a href="#" className="hover:text-primary text-center">Offer</a>
                <a href="#" className="hover:text-primary text-center">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
