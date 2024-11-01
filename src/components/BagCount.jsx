import React from "react";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BagCount = () => {
  const { bag } = useSelector((state) => state.bag);
  console.log(bag)
  return (
    <Link to="/bag">
      <div className="flex items-center p-1 lg:p-2 w-28 lg:w-40 rounded-2xl justify-between bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm  ">
        <span className="text-white text-sm lg:text-lg  font-bold flex-1 text-center text-md">
          {bag.length ? `${bag.length} items` : "no items"}
        </span>
        <RiShoppingBasket2Fill
          className={`${
            bag.length ? "animate-pulse" : ""
          } fill-white size-8 p-1 lg:size-12 lg:p-2 bg-glass-dark dark:bg-glass rounded-2xl`}
        />
      </div>
    </Link>
  );
};
