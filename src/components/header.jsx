import { useState } from "react";
import assets from "../assets/assets";

function Header() {

    const [menuOpen, setOpen] = useState(false);

  return (
    <section className="mt-6 px-6 lg:px-28">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold bg-green-500 border px-2 rounded-lg text-white">F</span>
          <img src={assets.icon2} alt="icon" />
        </div>

       {/* center */}
        <div className="hidden md:flex items-center gap-6 lg:text-xl font-semibold">
          <a href="#" className=" hover:text-primary active:primary ">Home</a>
          <a href="#" className=" hover:text-primary active:primary ">Menu <img src={assets.arrowDown} className="inline-block w-3 ml-1 " /></a>
          <a href="#" className=" hover:text-primary active:primary ">Service <img src={assets.arrowDown} className="inline-block w-3 ml-1" /></a>
          <a href="#" className=" hover:text-primary active:primary ">Offer</a>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4 relative">
          <img src={assets.search} alt="search" />
          <img src={assets.shoppingBag} alt="bag" />
          <button className="bg-primary flex px-6 py-2 rounded-full text-white">
            <span className="px-3"><img src={assets.phoneCall} alt="phone" /></span>
            Contact
          </button>

         
          <div className="md:hidden relative">
            <img
              src={assets.menu}
              alt="menu"
              className="w-6 h-6 cursor-pointer"

              onClick={()=>{setOpen(!menuOpen)} }
            
            />

           
          {menuOpen && (

<div className="absolute right-0 mt-2 bg-gray-100 p-3 rounded-full w-40 shadow-lg z-10">
<nav className="flex flex-col gap-2 text-base font-medium    text-gray-800">
  <a href="#"  className=" hover:text-primary" >Home</a>
  <a href="#"  className=" hover:text-primary">Menu</a>
  <a href="#"  className=" hover:text-primary">Service</a>
  <a href="#"  className=" hover:text-primary">Offer</a>
</nav>
</div>


          )}
             
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
