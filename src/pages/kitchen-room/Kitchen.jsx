import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Tagline } from "../../components/Tagline";
import { RoomsNavigation } from "../../components/RoomsNavigation";
import { ProductNavigation } from "./ProductNavigation";

export const Kitchen = () => {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div className="w-full h-screen bg-black bg-kitchen-day dark:bg-kitchen-night bg-cover bg-no-repeat bg-bottom saturate-200 overflow-hidden">
      <Navbar />
      <Tagline
        tagline={"Where Great Meals and Memories are Made."}
        showProducts={showProducts}
        setShowProducts={setShowProducts}
      />
      <ThemeSwitcher />
      <RoomsNavigation currentRoom={"Kitchen"} />
      {showProducts && <ProductNavigation room="kitchen"/>}
    </div>
  );
};
