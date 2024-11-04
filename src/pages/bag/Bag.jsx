import React from "react";
import { useSelector } from "react-redux";
import { Rooms } from "../../components/Rooms";
import { ProductsSummary } from "../../components/ProductsSummary";
import { PaymentSummary } from "../../components/PaymentSummary";
import { Link } from "react-router-dom";
export const Bag = () => {
  const { bag } = useSelector((state) => state.bag);
  return (
    <div className="w-full h-screen bg-black bg-bag-bg-day dark:bg-bag-bg-night bg-cover bg-no-repeat bg-bottom saturate-200 lg:flex lg:items-center lg:justify-center p-4 lg:p-0 overflow-y-auto">
      <div className="lg:w-11/12 lg:h-5/6 lg:grid lg:grid-rows-10 lg:gap-4">
        <div className="lg:row-span-1 place-self-center lg:place-self-start">
          <Rooms />
        </div>
        <div className="lg:row-span-9 lg:grid lg:grid-cols-10 lg:gap-4">
          <div className="h-full lg:col-span-6 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl p-2 lg:p-4 my-4 lg:my-0">
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
          <div className="lg:col-span-4">
            {bag.length ? (
              <PaymentSummary bag={bag} />
            ) : (
              <div className="h-full flex items-center justify-center bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl p-4 lg:p-0">
                <p className="font-bold text-sm lg:text-base">
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
