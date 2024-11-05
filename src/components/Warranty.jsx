import React from "react";
import { Link } from "react-router-dom";

export const Warranty = ({ product }) => {
  return (
    <>
      <p className="font-medium sm:text-xl">
        You have{" "}
        <span className="font-bold text-xl lg:text-2xl">{product?.warranty || 1} year </span>
        limited{" "}
        <Link to="/" className="text-white/75">
          warranty
        </Link>
      </p>
    </>
  );
};
