import React from "react";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../utility/utility";

export const ProductNavigationLinkBox = ({
  index,
  room,
  collection,
  startingFrom = 0,
}) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/products?room=${room}&collection=${collection}`);
  }
  return (
    <button
      className="hover:bg-glass-dark p-4 rounded-2xl font-bold w-full text-left"
      onClick={handleNavigate}
    >
      <div className="flex items-center justify-between">
        <span>
          {index + 1} &#41; {collection}
        </span>
        <span className="hidden sm:block">
          Starting &#8377;{formatNumber(startingFrom)}
        </span>
      </div>
    </button>
  );
};
