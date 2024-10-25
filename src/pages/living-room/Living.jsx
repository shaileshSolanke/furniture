import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Tagline } from "../../components/Tagline";
import { RoomsNavigation } from "../../components/RoomsNavigation";
import { ProductNavigation } from "./ProductNavigation";

export const Living = () => {
  const [showProducts,setShowProducts]=useState(false)
  return (
    <div className="w-full h-screen relative bg-black bg-living-day dark:bg-living-night bg-cover bg-no-repeat bg-bottom bg-scroll saturate-200 overflow-hidden">
      <Navbar />
      <Tagline tagline={"Create a Space You Love to Live In."} showProducts={showProducts} setShowProducts={setShowProducts}/>
      <ThemeSwitcher />
      <RoomsNavigation currentRoom={"Living Room"} />
      {showProducts && <ProductNavigation/>}
    </div>
  );
};
