import React from "react";
import { RiShoppingBasket2Fill } from "react-icons/ri";

export const CartCount = () => {
  return (
    <div className="flex items-center p-1 lg:p-2 w-28 lg:w-36 rounded-2xl justify-between bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm  ">
      <span className="text-white text-sm lg:text-lg  font-bold flex-1 text-center text-md">
        no Items
      </span>
      <RiShoppingBasket2Fill className="fill-white size-8 p-1 lg:size-12 lg:p-2 bg-glass-dark dark:bg-glass rounded-2xl " />
    </div>
  );
};
