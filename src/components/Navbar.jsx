import React from "react";
import { CartCount } from "./CartCount";

export const Navbar = () => {
  return (
    <div className="fixed z-40 w-full flex items-center justify-between p-2 md:px-8 md:py-6 lg:px-12 lg:py-8">
      <img
        src="https://shaileshsolanke.github.io/data/furniture/assets/logo/logo.png"
        alt="logo"
        className="h-16 md:h-20 lg:h-24 drop-shadow"
      />
      <CartCount />
    </div>
  );
};
