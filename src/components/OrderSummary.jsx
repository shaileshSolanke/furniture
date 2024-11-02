import React from "react";
import { OSone } from "./OSone";
import { OStwo } from "./OStwo";

export const OrderSummary = () => {
  return (
    <div className="h-full grid grid-rows-12 gap-4">
      <div className="h-full row-span-6 grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl relative no-scrollbar">
          <OSone />
        </div>
        <div className="col-span-1 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl p-8">
          <OStwo />
        </div>
      </div>
      <div className="row-span-4 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl"></div>
      <div className="row-span-2 bg-glass-dark shadow-glass backdrop-blur-md text-white rounded-2xl"></div>
    </div>
  );
};
