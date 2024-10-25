import React from "react";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Tagline } from "../../components/Tagline";
import { RoomsNavigation } from "../../components/RoomsNavigation";

export const WorkPlace = () => {
  return (
    <div className="w-full h-screen bg-black bg-workplace-day dark:bg-workplace-night bg-cover bg-no-repeat bg-bottom saturate-200">
      <Navbar />
      <Tagline tagline={"Inspiring Productivity and Creativity."}/>
      <ThemeSwitcher />
      <RoomsNavigation currentRoom={"Workplace"} />
    </div>
  );
};
