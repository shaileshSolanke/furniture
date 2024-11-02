import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../utility/utility";
import { Link } from "react-router-dom";

export const OStwo = () => {
  const { bag } = useSelector((state) => state.bag);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(bag.reduce((acc, curr) => acc + curr[0].price * curr[1], 0));
  }, [bag]);
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-1">
          <p>Subtotal &#58;</p>
          <p className="font-bold">&#8377;{formatNumber(total)}</p>
        </div>
        <div className="flex items-center justify-between mb-1">
          <p>Shipping &#58;</p>
          <p className="font-bold">Free</p>
        </div>
        <div className="flex items-center justify-between mb-1">
          <p>Estimated tax &#40; 18&#37; &#41; &#58;</p>
          <p className="font-bold">&#8377;{formatNumber(total * 0.18)}</p>
        </div>
        <div className="flex items-center justify-between mb-1">
          <p>Total &#58;</p>
          <p className="font-bold">
            &#8377;{formatNumber(total + total * 0.18)}
          </p>
        </div>
        <Link className="text-white/50">Do you have a Coupen code &#63;</Link>
      </div>
      <div>
        <div className="flex items-center justify-between text-3xl">
          <p>Order Total &#58;</p>
          <p className="font-bold">
            &#8377;{formatNumber(Math.round(total + total * 0.18))}
          </p>
        </div>
      </div>
    </div>
  );
};
