import React from "react";
import { Logo } from "../assets";
import { BiCartAdd, BiSearch, BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="px-3 py-[7px] bg-black rounded-full"
            />
            <p className="font-bold text-xl">Ecommerce</p>
          </div>
          <ul className="flex items-center gap-8 text-base text-gray-500">
            <li>
              <a href="#">Hoome</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <form className="max-w-sm">
              <div className="relative">
                <div className="absolute left-3 inset-y-0 flex items-center">
                  <BiSearch className="text-gray-400 text-lg" />
                </div>
                <input
                  type="search"
                  placeholder="Search products"
                  className="rounded-md w-full text-gray-500 py-2 px-3 pl-10 border-2 border-gray-300 focus:outline-none outline-none"
                />
              </div>
            </form>
            <BiCartAdd className="text-gray-500 text-xl" />
            <BiUserCircle className="text-gray-500 text-xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
