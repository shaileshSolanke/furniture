import React, { useEffect, useState } from "react";
import { formatNumber } from "../utility/utility";
import { Link } from "react-router-dom";

export const PaymentSummary = ({ bag }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(bag.reduce((acc, curr) => acc + curr[0].price * curr[1], 0));
  }, [bag]);
  return (
    <div className="h-full lg:grid lg:grid-rows-10 lg:gap-4">
      <div className="lg:row-span-4 flex flex-col justify-between bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2 lg:mb-0">
          <p className="text-sm lg:text-base">Items &#40; {bag.length} &#41; &#58;</p>
          <p className="font-bold text-sm lg:text-base">&#8377;{formatNumber(total)}</p>
        </div>
        <div className="flex items-center justify-between mb-2 lg:mb-0">
          <p className="text-sm lg:text-base">Shipping & handling &#58;</p>
          <p className="font-bold text-sm lg:text-base">Free</p>
        </div>
        <div className="flex items-center justify-between mb-2 lg:mb-0">
          <p className="text-sm lg:text-base">Total before Tax &#58;</p>
          <p className="font-bold text-sm lg:text-base">&#8377;{formatNumber(total)}</p>
        </div>
        <div className="flex items-center justify-between mb-2 lg:mb-0">
          <p className="text-sm lg:text-base">Estimated tax &#40; 18&#37; &#41; &#58;</p>
          <p className="font-bold text-sm lg:text-base">Calculated in Checkout</p>
        </div>
        <div className="flex items-center justify-between text-3xl border-t pt-2">
          <p>Total &#58;</p>
          <p className="font-bold">&#8377;{formatNumber(total)}</p>
        </div>
      </div>
      <Link to="/checkout" className="lg:row-span-2">
        <button className="h-full w-full bg-white/75 hover:bg-white shadow-glass backdrop-blur-md text-3xl text-black rounded-2xl font-bold p-4 lg:p-0 mt-4 lg:mt-0">
          Proceed To Buy
        </button>
      </Link>
    </div>
  );
};
