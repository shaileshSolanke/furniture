import React from "react";
import { ProductNavigationLink } from "../../components/ProductNavigationLink";
import { ProductNavigationLinkBox } from "../../components/ProductNavigationLinkBox";

const productNavigationData = [
  {
    top: 40,
    left: 55,
    collection: "Shelving units",
  },
  {
    top: 60,
    left: 25,
    collection: "Dining sets",
  },
  {
    top: 45,
    left: 25,
    collection: "Coffee & tea",
  },
  {
    top: 65,
    left: 40,
    collection: "Dining Chairs",
  },
  {
    top: 50,
    left: 15,
    collection: "Dining tables",
  },
  {
    top: -5,
    left: 20,
    collection: "Pendant lighting",
  },
  {
    top: 0,
    left: 0,
    collection: "Poster with frame",
  },
  {
    top: 30,
    left: 35,
    collection: "Armchairs",
  },
];

export const ProductNavigation = ({ room }) => {
  return (
    <>
      {productNavigationData.map((link, index) => (
        <ProductNavigationLink
          key={index}
          room={room}
          top={link.top}
          left={link.left}
          collection={link.collection}
        />
      ))}
      <div className="lg:hidden absolute w-full h-full flex items-center justify-center">
        <div className="bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-sm text-white rounded-2xl w-2/3 h-2/5 p-4 no-scrollbar">
          {productNavigationData.map((link, index) => (
            <ProductNavigationLinkBox
              key={index}
              index={index}
              room={room}
              collection={link.collection}
            />
          ))}
        </div>
      </div>
    </>
  );
};
