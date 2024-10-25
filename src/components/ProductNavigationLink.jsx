import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export const ProductNavigationLink = ({ top, left,collection }) => {
  return (
    <div
      className={`sofas absolute z-30 hidden lg:block top-[${top}%] left-[${left}%] p-16 rounded-full opacity-30 hover:opacity-100 transition-all duration-300`}
    >
      <FiPlusCircle className="stroke-white transition-all duration-300 size-10 drop-shadow-tagline" />
      <div className="fixed bg-white font-semibold opacity-0 hover:opacity-100 transition-all duration-300 grid grid-cols-4 rounded-r-xl rounded-bl-xl w-max -translate-y-4 translate-x-6 overflow-hidden">
        <div className="col-span-3 flex flex-col p-2">
          <span>{collection}</span>
          <span>Starting @999</span>
        </div>
        <div className="col-span-1 flex items-center justify-center p-2 hover:bg-black/10">
          <Link to="">
            <MdOutlineKeyboardArrowRight className="size-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};