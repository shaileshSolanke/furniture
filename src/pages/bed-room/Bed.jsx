import React from "react";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Tagline } from "../../components/Tagline";
import { RoomsNavigation } from "../../components/RoomsNavigation";

export const Bed = () => {
  return (
    <div className="w-full h-screen bg-black bg-bed-day dark:bg-bed-night bg-cover bg-no-repeat bg-bottom saturate-200">
      <Navbar />
      <Tagline tagline={"Where Every Night Feels Luxurious."}/>
      <ThemeSwitcher />
      <RoomsNavigation currentRoom={"Bed Room"}/>
    </div>
  );
};
