import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductNavigationLinkBox = ({ index, room, collection }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/products?room=${room}&collection=${collection}`);
  }
  return (
    <button
      className="hover:bg-glass-dark hover:dark:bg-glass p-2 rounded-2xl font-bold w-full text-left"
      onClick={handleNavigate}
    >
      {index+1} &#41; {collection}
    </button>
  );
};
