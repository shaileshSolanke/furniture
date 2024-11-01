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
    <div className="h-full flex flex-col gap-4 overflow-y-scroll no-scrollbar">
      {bag.map((item, index) => (
        <div
          key={index}
          className="h-1/3 flex-shrink-0 flex-grow-0 bg-glass-dark shadow-glass backdrop-blur-sm rounded-2xl flex"
        >
          <div className="h-full aspect-square relative">
            <img
              src={`https://shaileshsolanke.github.io/data/${item[0].src}`}
              className="p-4 h-full absolute drop-shadow-tagline"
            />
            <span className="absolute right-0 bottom-0 m-4 px-4 py-2 bg-glass rounded-full">
              &#120; {item[1]}
            </span>
          </div>
          <div className="h-full w-full grid grid-cols-12">
            <div className="col-span-5 flex items-center justify-center">
              <div>
                <p className="text-xl">{item[0].brand}</p>
                <p className="font-light">{item[0].name}</p>
              </div>
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <div>
                <p className="font-bold text-4xl">
                  &#8377;{formatNumber(item[0].price * item[1])}
                </p>
                <p className="font-light">
                  {item[1]} &#120; {formatNumber(item[0].price)}
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <button onClick={() => handleRemoveFromBag(item[0])}>
                <FaTrashAlt className="fill-white size-12 p-3 bg-glass rounded-2xl" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
