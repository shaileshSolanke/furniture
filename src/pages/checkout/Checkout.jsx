import React, { useState } from "react";
import { OrderForm } from "../../components/OrderForm";
import { BsHouseCheckFill } from "react-icons/bs";
import { BsFillHouseExclamationFill } from "react-icons/bs";
import { OrderSummary } from "../../components/OrderSummary";

export const Checkout = () => {
  const [addressCollected, setAddressCollected] = useState(false);
  return (
    <div className="w-full h-screen bg-black bg-bag-bg-day dark:bg-bag-bg-night bg-cover bg-no-repeat bg-bottom saturate-200 flex items-center justify-center">
      <div className="w-11/12 h-5/6 grid grid-rows-10 gap-4">
        <div className="row-span-1 bg-glass-dark shadow-glass backdrop-blur-md rounded-2xl p-2">
          <div className="h-full flex items-center">
            <marquee>
              <span className="bg-yellow-300 p-2">FLAT 50&#37; OFF</span>
              <span className="p-2 text-white">USE CODE &#58;</span>
              <span className="bg-black text-white p-2">GET50</span>
            </marquee>
          </div>
        </div>
        <div className="row-span-9 grid grid-cols-10 gap-4">
          <div className="h-full w-full col-span-4 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl">
            {addressCollected ? (
              <div className="absolute h-full w-full rounded-2xl flex items-center justify-center">
                <div className="w-48">
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
          <div className="col-span-6">
            {addressCollected ? (
              <OrderSummary />
            ) : (
              <div className="h-full bg-glass-dark shadow-glass backdrop-blur-md rounded-2xl flex items-center justify-center">
                <BsFillHouseExclamationFill className="size-48 fill-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
