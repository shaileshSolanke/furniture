import React from "react";
import { Link } from "react-router-dom";

export const Warranty = ({ product }) => {
  return (
    <>
      <p className="font-medium text-xl">
        You have{" "}
        <span className="font-bold text-2xl">{product.warranty} year </span>
        limited{" "}
        <Link to="/" className="underline">
          warranty
        </Link>
      </p>
    </>
  );
};
