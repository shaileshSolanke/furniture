import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Tagline } from "../../components/Tagline";
import { RoomsNavigation } from "../../components/RoomsNavigation";
import { ProductNavigation } from "./ProductNavigation";

export const Bed = () => {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div className="w-full h-screen bg-black bg-bed-day dark:bg-bed-night bg-cover bg-no-repeat bg-bottom saturate-200 overflow-hidden">
      <Navbar />
      <Tagline
        tagline={"Where Every Night Feels Luxurious."}
        showProducts={showProducts}
        setShowProducts={setShowProducts}
      />
      <ThemeSwitcher />
      <RoomsNavigation currentRoom={"Bed Room"} />
      {showProducts && <ProductNavigation room="bed" />}
    </div>
  );
};
