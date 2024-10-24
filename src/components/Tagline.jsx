import React from "react";

export const Tagline = ({ tagline }) => {
  return (
    <h1 className="w-full text-center font-Borel text-white text-3xl sm:text-4xl lg:text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold drop-shadow-tagline px-24">
      {tagline}
    </h1>
  );
};
