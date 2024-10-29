import React from "react";
import { FaStore } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CheckStoreStock = () => {
  return (
    <div>
      <FaStore className="fill-white size-16 place-self-center" />
      <p className="text-center text-2xl">In store</p>
      <p className="text-center">Check in-store</p>
      <p className="text-center">stock</p>
      <Link to="/">
        <FaArrowRightLong className="place-self-center h-full m-2" />
      </Link>
    </div>
  );
};
