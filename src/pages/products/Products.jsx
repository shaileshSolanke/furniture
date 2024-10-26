import React from "react";
import { useLocation } from "react-router-dom";
import { CartCount } from "../../components/CartCount";

export const Products = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const room = useQuery().get("room");
  return (
    <div
      className={`w-full h-screen relative bg-black bg-${room}-day dark:bg-${room}-night bg-cover bg-no-repeat bg-bottom flex items-center justify-center`}
    >
      <div className="w-11/12 h-5/6 grid grid-rows-10 gap-4">
        <div className="row-span-1 place-self-end">
          <CartCount />
        </div>
        <div className="row-span-11 grid grid-cols-12 gap-4">
          <div className="col-span-3 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm text-white font-bold p-2 rounded-2xl"></div>
          <div className="col-span-6 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm text-white font-bold p-2 rounded-2xl"></div>
          <div className="col-span-3 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm text-white font-bold p-2 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};
