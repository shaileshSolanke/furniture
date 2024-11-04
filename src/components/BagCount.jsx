import React from "react";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BagCount = () => {
  const { bag } = useSelector((state) => state.bag);
  return (
    <Link to="/bag">
      <div className="lg:flex lg:items-center lg:p-2 lg:w-40 rounded-2xl lg:justify-between bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm  ">
        <span className="hidden lg:block text-white text-sm lg:text-lg  font-bold flex-1 text-center text-md">
          {bag.length ? `${bag.length} items` : "no items"}
        </span>
        <RiShoppingBasket2Fill
          className={`${
            bag.length ? "animate-pulse" : ""
          } fill-white size-12 p-2 lg:bg-glass-dark lg:dark:bg-glass rounded-2xl`}
        />
      </div>
    </Link>
  );
};
