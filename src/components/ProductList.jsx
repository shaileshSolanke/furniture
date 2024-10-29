import React from "react";
import { formatNumber } from "../utility/utility";

export const ProductList = ({ products, itemIndex, setItemIndex }) => {
  return (
    <ul className="w-full h-full">
      {products.map((item, index) => (
        <li
          key={index}
          className={`flex items-center justify-between h-1/6 px-6 hover:bg-glass-dark ${
            index === itemIndex && "bg-glass-dark"
          }`}
          onClick={() => setItemIndex(index)}
        >
          <div className="h-full flex items-center">
            <img
              src={`https://shaileshsolanke.github.io/data/${item.baseImg}`}
              className="h-4/6 aspect-square drop-shadow-tagline hover:saturate-200"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">{item.name}</span>
            <span className="text-sm font-thin">{item.subCollection}</span>
          </div>
          <div className="text-2xl">&#8377;{formatNumber(item.basePrice)}</div>
        </li>
      ))}
    </ul>
  );
};
