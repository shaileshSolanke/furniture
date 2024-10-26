import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Tagline } from "../../components/Tagline";
import { RoomsNavigation } from "../../components/RoomsNavigation";
import { ProductNavigation } from "./ProductNavigation";

export const WorkPlace = () => {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div className="w-full h-screen bg-black bg-workplace-day dark:bg-workplace-night bg-cover bg-no-repeat bg-bottom saturate-200 overflow-hidden">
      <Navbar />
      <Tagline
        tagline={"Inspiring Productivity and Creativity."}
        showProducts={showProducts}
        setShowProducts={setShowProducts}
      />
      <ThemeSwitcher />
      <RoomsNavigation currentRoom={"Workplace"} />
      {showProducts && <ProductNavigation room="workplace"/>}
    </div>
  );
};
