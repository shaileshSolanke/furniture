import React from "react";

export const Tagline = ({ tagline, showProducts, setShowProducts }) => {
  return (
    !showProducts && (
      <div className="w-full text-center fixed z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className=" font-Borel text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold drop-shadow-tagline px-24">
          {tagline}
        </h1>
        <button
          className="shadow-glass bg-glass-dark hover:bg-white text-white hover:text-black font-bold p-4 text-2xl lg:text-3xl rounded-2xl mt-4 transition-all duration-300"
          onClick={() => setShowProducts(true)}
        >
          Explore
        </button>
      </div>
    )
  );
};
