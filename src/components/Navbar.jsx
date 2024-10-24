import React from "react";
import { RiShoppingBasket2Fill } from "react-icons/ri";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 md:px-8 md:py-6 lg:px-12 lg:py-8">
      <img src="https://shaileshsolanke.github.io/data/furniture/assets/logo/logo.png" alt="logo" className="h-16 md:h-20 lg:h-24 drop-shadow"/>
      <div className="flex items-center p-1 lg:p-2 w-28 lg:w-36 rounded-2xl justify-between bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm  ">
        <span className="text-white text-sm lg:text-lg  font-bold flex-1 text-center text-md">
          no Items
        </span>
        <RiShoppingBasket2Fill className="fill-white size-8 p-1 lg:size-12 lg:p-2 bg-glass-dark dark:bg-glass rounded-2xl " />
      </div>
    </div>
  );
};
