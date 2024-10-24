import React from "react";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Tagline } from "../../components/Tagline";
import { RoomsNavigation } from "../../components/RoomsNavigation";

export const Living = () => {
  return (
    <div className="w-full h-screen bg-living-day dark:bg-living-night bg-cover bg-no-repeat bg-bottom saturate-200">
      <Navbar />
      <Tagline tagline={"Create a Space You Love to Live In."}/>
      <ThemeSwitcher />
      <RoomsNavigation currentRoom={"Living Room"} />
    </div>
  );
};
