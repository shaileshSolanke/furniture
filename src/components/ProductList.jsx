import React from "react";
import { formatNumber } from "../utility/utility";

export const ProductList = ({
  products,
  itemIndex,
  setItemIndex,
  setVarientIndex,
}) => {
  return (
    <ul className="lg:w-full h-full flex p-2 lg:block overflow-x-auto">
      {products.map((item, index) => (
        <li
          key={index}
          className={`flex items-center justify-center xl:justify-between h-full aspect-square lg:aspect-auto lg:h-1/6 lg:px-6 hover:bg-glass-dark rounded-2xl ${
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
          <div className="hidden 2xl:pl-4 2xl:flex 2xl:flex-col 2xl:items-center">
            <span className="font-semibold">{item.name}</span>
            <span className="text-sm font-thin">{item.subCollection}</span>
          </div>
          <div className="text-2xl hidden xl:block">
            &#8377;{formatNumber(item.basePrice)}
          </div>
        </li>
      ))}
    </ul>
  );
};
