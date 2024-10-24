import React, { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const [isDay, setIsDay] = useState(true);
  function handleTheme() {
    document.documentElement.classList.toggle("dark");
    setIsDay(!isDay);
  }
  useEffect(() => {
    const current = document.documentElement.classList.contains("dark");
    setIsDay(current);
  }, []);
  return (
    <button className="fixed bottom-0 right-0 p-2 md:px-8 md:py-6 lg:px-12 lg:py-8" onClick={handleTheme}>
      {isDay ? (
        <FaLightbulb className="fill-white size-12 bg-glass shadow-glass backdrop-blur-sm rounded-2xl p-2" />
      ) : (
        <FaRegLightbulb className="fill-white size-12 bg-glass-dark shadow-glass backdrop-blur-sm rounded-2xl p-2" />
      )}
    </button>
  );
};
