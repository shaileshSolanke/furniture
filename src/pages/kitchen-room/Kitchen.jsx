import React from "react";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Tagline } from "../../components/Tagline";
import { RoomsNavigation } from "../../components/RoomsNavigation";

export const Kitchen = () => {
  return (
    <div className="w-full h-screen bg-black bg-kitchen-day dark:bg-kitchen-night bg-cover bg-no-repeat bg-bottom saturate-200">
      <Navbar />
      <Tagline tagline={"Where Great Meals and Memories are Made."}/>
      <ThemeSwitcher />
      <RoomsNavigation currentRoom={"Kitchen"} />
    </div>
  );
};
