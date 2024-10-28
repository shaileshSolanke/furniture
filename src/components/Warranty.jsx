import React from "react";
import { FaPlus } from "react-icons/fa6";

export const Warranty = ({ product }) => {
  return (
    <>
      <p className="font-medium drop-shadow-tagline text-xl">
        You have <span className="font-bold text-2xl">{product.warranty} year</span>{" "}
        limited warranty
      </p>
      <FaPlus className="fill-white size-6 place-self-start"/>
    </>
  );
};
