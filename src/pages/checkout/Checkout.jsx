import React, { useState } from "react";
import { OrderForm } from "../../components/OrderForm";
import { BsHouseCheckFill } from "react-icons/bs";
import { BsFillHouseExclamationFill } from "react-icons/bs";
import { OrderSummary } from "../../components/OrderSummary";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Checkout = () => {
  const [addressCollected, setAddressCollected] = useState(false);
  const { bag } = useSelector((state) => state.bag);
  return (
    <div className="w-full h-screen bg-black bg-bag-bg-day dark:bg-bag-bg-night bg-cover bg-no-repeat bg-bottom saturate-200 lg:flex lg:items-center lg:justify-center p-4 lg:p-0 overflow-y-auto">
      {bag.length ? (
        <div className="lg:w-11/12 lg:h-5/6 lg:grid lg:grid-rows-10 lg:gap-4">
          <div className="lg:row-span-1 bg-glass-dark shadow-glass backdrop-blur-md rounded-2xl p-2">
            <div className="h-full flex items-center">
              <marquee>
                <span className="bg-yellow-300 p-2">FLAT 50&#37; OFF</span>
                <span className="p-2 text-white">USE CODE &#58;</span>
                <span className="bg-black text-white p-2">GET50</span>
              </marquee>
            </div>
          </div>
          <div className="lg:row-span-9 lg:grid lg:grid-cols-10 lg:gap-4">
            <div className="lg:h-full w-full lg:col-span-2 xl:col-span-3 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl my-4 lg:my-0">
              {addressCollected ? (
                <div className="lg:absolute h-full w-full rounded-2xl flex items-center justify-center">
                  <div className="w-48 p-4 size-24 lg:size-48">
                    <BsHouseCheckFill className="size-full" />
                  </div>
                </div>
              ) : (
                <div className="h-full w-full overflow-y-auto no-scrollbar relative">
                  <OrderForm
                    addressCollected={addressCollected}
                    setAddressCollected={setAddressCollected}
                  />
                </div>
              )}
            </div>
            <div className="lg:col-span-8 xl:col-span-7">
              {addressCollected ? (
                <OrderSummary />
              ) : (
                <div className="h-full bg-glass-dark shadow-glass backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <BsFillHouseExclamationFill className="p-4 size-24 lg:size-48 fill-white" />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-1/2 flex items-center justify-center bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl p-4 lg:p-0">
          <p className="font-bold text-xs lg:text-base">
            Looks like your bag is empty.{" "}
            <Link to="/" className="underline text-blue-300">
              Let's change that!
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};
