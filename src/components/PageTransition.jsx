import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsTransitioning(true);
    const timeOut = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [location]);
  return (
    isTransitioning && (
      <div
        className={`bg-black w-full h-screen fixed flex items-center justify-center transition-opacity ease-in-out duration-1000 z-50 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: isTransitioning ? "auto" : "none" }}
      >
        <img src="https://shaileshsolanke.github.io/data/furniture/assets/logo/logo.png" alt="logo" className="h-1/4" />
      </div>
    )
  );
};
