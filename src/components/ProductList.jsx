import React from "react";
import { formatNumber } from "../utility/utility";

export const ProductList = ({
  products,
  itemIndex,
  setItemIndex,
  setVarientIndex,
}) => {
  return (
    <ul className="lg:w-full h-full flex p-2 lg:p-0 lg:block overflow-x-auto">
      {products.map((item, index) => (
        <li
          key={index}
          className={`flex items-center justify-between h-full aspect-square lg:aspect-auto lg:h-1/6 lg:px-6 hover:bg-glass-dark rounded-2xl ${
            index === itemIndex && "bg-glass-dark shrink-0"
          }`}
          onClick={() => {
            setItemIndex(index);
            setVarientIndex(0);
          }}
        >
          <div className="h-full flex items-center p-2 lg:p-0 shrink-0">
            <img
              src={`https://shaileshsolanke.github.io/data/${item.baseImg}`}
              className="h-full lg:h-4/6 aspect-square drop-shadow-tagline"
            />
          </div>
          <div className="hidden lg:pl-4 lg:flex lg:flex-col lg:items-center">
            <span className="font-semibold">{item.name}</span>
            <span className="text-sm font-thin">{item.subCollection}</span>
          </div>
          <div className="text-2xl hidden lg:block">
            &#8377;{formatNumber(item.basePrice)}
          </div>
        </li>
      ))}
    </ul>
  );
};
