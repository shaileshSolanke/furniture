import React from "react";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BagCount = () => {
  const { bag } = useSelector((state) => state.bag);
  return (
    <Link to="/bag">
      <div className="ml-2 md:flex md:items-center md:p-2 md:w-40 rounded-2xl md:justify-between bg-glass-dark shadow-glass backdrop-blur-sm  ">
        <span className="hidden md:block text-white text-sm md:text-lg font-bold flex-1 text-center text-md">
          {bag.length ? `${bag.length} items` : "no items"}
        </span>
        <RiShoppingBasket2Fill
          className={`${
            bag.length ? "fill-yellow-200" : "fill-white"
          } size-12 p-2 md:bg-glass-dark md:dark:bg-glass rounded-2xl`}
        />
      </div>
    </Link>
  );
};
