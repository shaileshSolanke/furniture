import React from "react";
import { FaStore } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CheckStoreStock = () => {
  return (
    <Link to="/" className="flex items-center justify-between lg:block">
      <FaStore className="fill-white size-16 lg:place-self-center" />
      <div>
        <p className="text-center text-2xl hidden lg:block">In store</p>
        <p className="text-center">Check in-store</p>
        <p className="text-center">stock</p>
      </div>
      <FaArrowRightLong className="size-8 lg:place-self-center lg:h-full lg:m-2" />
    </Link>
  );
};
