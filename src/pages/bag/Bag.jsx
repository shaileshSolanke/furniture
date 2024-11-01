import React from "react";
import { useSelector } from "react-redux";
import { Rooms } from "../../components/Rooms";
import { ProductsSummary } from "../../components/ProductsSummary";
import { PaymentSummary } from "../../components/PaymentSummary";
import { Link } from "react-router-dom";
export const Bag = () => {
  const { bag } = useSelector((state) => state.bag);
  return (
    <div className="w-full h-screen bg-black bg-bag-bg-day dark:bg-bag-bg-night bg-cover bg-no-repeat bg-bottom saturate-200 flex items-center justify-center">
      <div className="w-11/12 h-5/6 grid grid-rows-10 gap-4">
        <div className="row-span-1">
          <Rooms />
        </div>
        <div className="row-span-9 grid grid-cols-10 gap-4">
          <div className="h-full col-span-6 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl p-4">
            {bag.length ? (
              <ProductsSummary bag={bag} />
            ) : (
              <div className="h-full flex items-center justify-center">
                <img
                  src="https://shaileshsolanke.github.io/data/furniture/assets/cart/cart.png"
                  className="w-2/4 aspect-square grayscale"
                />
              </div>
            )}
          </div>
          <div className="col-span-4">
            {bag.length ? (
              <PaymentSummary bag={bag} />
            ) : (
              <div className="h-full flex items-center justify-center bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl">
                <p className="font-bold">
                  Looks like your bag is empty.{" "}
                  <Link to="/" className="underline text-blue-300">
                    Let's change that!
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
