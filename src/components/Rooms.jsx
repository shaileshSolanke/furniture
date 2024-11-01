import React from "react";
import { RiSofaFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { TbToolsKitchen } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Rooms = () => {
  return (
    <div className="flex gap-4">
      <Link
        to="/"
        className="flex items-center p-2 w-fit rounded-2xl justify-between bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm"
      >
        <RiSofaFill className="fill-white size-12 p-2 bg-glass-dark dark:bg-glass rounded-2xl" />
        <span className="text-white text-lg px-2 font-bold flex-1 text-center text-md">
          Living Room
        </span>
      </Link>
      <Link
        to="/workplace"
        className="flex items-center p-2 w-fit rounded-2xl justify-between bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm"
      >
        <MdOutlineWork className="fill-white size-12 p-2 bg-glass-dark dark:bg-glass rounded-2xl" />
        <span className="text-white text-lg px-2 font-bold flex-1 text-center text-md">
          Workplace
        </span>
      </Link>
      <Link
        to="/bed"
        className="flex items-center p-2 w-fit rounded-2xl justify-between bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm"
      >
        <IoBed className="fill-white size-12 p-2 bg-glass-dark dark:bg-glass rounded-2xl"/>
        <span className="text-white text-lg px-2 font-bold flex-1 text-center text-md">
          Bed Room
        </span>
      </Link>
      <Link
        to="/kitchen"
        className="flex items-center p-2 w-fit rounded-2xl justify-between bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm"
      >
        <TbToolsKitchen className="fill-white stroke-white size-12 p-2 bg-glass-dark dark:bg-glass rounded-2xl " />
        <span className="text-white text-lg px-2 font-bold flex-1 text-center text-md">
          Kitchen
        </span>
      </Link>
    </div>
  );
};
