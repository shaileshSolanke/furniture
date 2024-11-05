import React from "react";
import { formatNumber } from "../utility/utility";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromBag } from "../redux/productsSlice";

export const ProductsSummary = ({ bag }) => {
  const dispatch = useDispatch();
  function handleRemoveFromBag(item) {
    dispatch(removeFromBag(item));
  }

  return (
    <div className="h-full flex flex-col gap-2 lg:gap-4">
      {bag.map((item, index) => (
        <div
          key={index}
          className="lg:h-1/4 flex-shrink-0 flex-grow-0 bg-glass-dark shadow-glass backdrop-blur-sm rounded-2xl flex items-center lg:flex-row p-2"
        >
          <div className="h-20 lg:h-full aspect-square relative">
            <img
              src={`https://shaileshsolanke.github.io/data/${item[0].src}`}
              className="p-2 lg:p-4 h-full lg:absolute drop-shadow-tagline"
            />
            <span className="hidden lg:block absolute right-0 bottom-0 m-4 px-4 py-2 bg-glass-dark rounded-full">
              &#120; {item[1]}
            </span>
          </div>
          <div className="h-full w-full grid grid-cols-12">
            <div className="col-span-5 flex items-center justify-center">
              <div className="pl-2 lg:pl-0">
                <p className="lg:text-xl">{item[0].brand}</p>
                <p className="text-xs lg:text-base font-light">
                  {item[0].name}
                </p>
              </div>
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <div>
                <p className="hidden lg:block font-bold text-4xl">
                  &#8377;{formatNumber(item[0].price * item[1])}
                </p>
                <p className="font-light">
                  {item[1]} &#120; {formatNumber(item[0].price)}
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <button onClick={() => handleRemoveFromBag(item[0])}>
                <FaTrashAlt className="fill-white size-8 lg:size-12 p-2 lg:p-3 bg-white/10 rounded-lg lg:rounded-2xl" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
