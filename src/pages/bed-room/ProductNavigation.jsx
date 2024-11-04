import React from "react";
import { ProductNavigationLink } from "../../components/ProductNavigationLink";
import { ProductNavigationLinkBox } from "../../components/ProductNavigationLinkBox";

const productNavigationData = [
  {
    top: 45,
    left: 20,
    collection: "Bed",
  },
  {
    top: 55,
    left: 10,
    collection: "Mattresses",
  },
  {
    top: 68,
    left: 23,
    collection: "Pillows",
  },
  {
    top: 50,
    left: 35,
    collection: "Bedding",
  },
  {
    top: 10,
    left: 10  ,
    collection: "Mirrors",
  },
  {
    top: 55,
    left: 78,
    collection: "Bedside tables",
  },
  {
    top: 70,
    left: 50,
    collection: "Carpets",
  },
  {
    top: 50,
    left: -5,
    collection: "Chests of drawers",
  },
  {
    top: 45,
    left: 75,
    collection: "Armchairs",
  },
  {
    top: 35,
    left: 40,
    collection: "Pots & plants",
  },
];

export const ProductNavigation = ({room}) => {
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
