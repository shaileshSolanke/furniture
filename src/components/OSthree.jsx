import React from "react";
import { useSelector } from "react-redux";

export const OSthree = () => {
  const { bag } = useSelector((state) => state.bag);
  return (
    <div className="h-full w-full p-2 lg:p-4 grid grid-cols-10">
      <div className="col-span-4 lg:col-span-2 bg-glass-dark rounded-s-2xl flex items-center justify-center p-6">
        <div className="text-xl text-center">
          <p>Items Ordered</p>
          <p>&#40; {bag.length} &#41;</p>
        </div>
      </div>
      <div className="h-full col-span-6 lg:col-span-8 p-4 flex overflow-x-auto">
        {bag.map((item, index) => (
          <div
            key={index}
            className="h-full mx-4 flex items-center relative shrink-0"
          >
            <img
              src={`https://shaileshsolanke.github.io/data/${item[0].src}`}
              className="h-28 aspect-square drop-shadow-tagline"
            />
            <span className="absolute right-0 bottom-0 bg-glass-dark px-2 py-1 rounded">
              x {item[1]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
