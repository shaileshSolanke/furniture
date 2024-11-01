import React, { useEffect, useState } from "react";
import { formatNumber } from "../utility/utility";

export const PaymentSummary = ({ bag }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(bag.reduce((acc, curr) => acc + curr[0].price * curr[1], 0));
  }, [bag]);
  return (
    <div className="h-full grid grid-rows-10 gap-4">
      <div className="row-span-4 flex flex-col justify-between bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <p>Items &#40; {bag.length} &#41; &#58;</p>
          <p className="font-bold">&#8377;{formatNumber(total)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping & handling &#58;</p>
          <p className="font-bold">Free</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Total before Tax &#58;</p>
          <p className="font-bold">&#8377;{formatNumber(total)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Estimated tax &#40; 18&#37; &#41; &#58;</p>
          <p className="font-bold">&#8377;{formatNumber(total * 0.18)}</p>
        </div>
        <div className="flex items-center justify-between text-3xl">
          <p>Total &#58;</p>
          <p className="font-bold">&#8377;{formatNumber(total + total * 0.18)}</p>
        </div>
      </div>
      <div className="row-span-2">
        <button className="h-full w-full bg-white/75 hover:bg-white shadow-glass backdrop-blur-md text-3xl text-black rounded-2xl">
          Go for payment{" "}
          <span className="font-bold">
            &#8377;{formatNumber(total + total * 0.18)}
          </span>
        </button>
      </div>
    </div>
  );
};
