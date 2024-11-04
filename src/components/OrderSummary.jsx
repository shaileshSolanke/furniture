import React, { useState } from "react";
import { OSone } from "./OSone";
import { OStwo } from "./OStwo";
import { OSthree } from "./OSthree";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeBagEmpty } from "../redux/productsSlice";
import { removeCustomer } from "../redux/customerSlice";
import { BeatLoader } from "react-spinners";

export const OrderSummary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentStatus, setPaymentStatus] = useState(false);

  async function handleOrder() {
    setPaymentStatus(true);
    await handlePayment();
    alert(`Payment Successful.
           Thank you, for the Order`);
    dispatch(makeBagEmpty());
    dispatch(removeCustomer());
    navigate("/");
  }

  function handlePayment() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setPaymentStatus(true);
        resolve();
      }, 3500);
    });
  }
  return (
    <div className="w-full h-full lg:grid lg:grid-rows-12 lg:gap-4">
      <div className="h-full lg:row-span-6 lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="col-span-1 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl relative no-scrollbar">
          <OSone />
        </div>
        <div className="col-span-1 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl p-4 lg:p-8 my-4 lg:my-0">
          <OStwo />
        </div>
      </div>
      <div className="row-span-4 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl">
        <OSthree />
      </div>
      <button
        className="row-span-2 bg-white/65 hover:bg-white shadow-glass backdrop-blur-md rounded-2xl text-3xl font-bold text-black mt-4 lg:mt-0 lg:p-0 w-full py-4 lg:py-0"
        onClick={handleOrder}
      >
        {paymentStatus ? (
          <div>
            <BeatLoader color="#000" />
            <p className="text-sm font-medium">Checking Payment Status</p>
          </div>
        ) : (
          "Place Order"
        )}
      </button>
    </div>
  );
};
