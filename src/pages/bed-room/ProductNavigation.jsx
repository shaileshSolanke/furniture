import React from "react";
import { ProductNavigationLink } from "../../components/ProductNavigationLink";
import { ProductNavigationLinkBox } from "../../components/ProductNavigationLinkBox";

const productNavigationData = [
  {
    top: 45,
    left: 20,
    collection: "Bed",
    startingFrom: 0,
  },
  {
    top: 55,
    left: 10,
    collection: "Mattresses",
    startingFrom: 0,
  },
  {
    top: 68,
    left: 23,
    collection: "Pillows",
    startingFrom: 0,
  },
  {
    top: 50,
    left: 35,
    collection: "Bedding",
    startingFrom: 0,
  },
  {
    top: 10,
    left: 10,
    collection: "Mirrors",
    startingFrom: 0,
  },
  {
    top: 55,
    left: 78,
    collection: "Bedside-tables",
    startingFrom: 0,
  },
  {
    top: 70,
    left: 50,
    collection: "Carpets",
    startingFrom: 0,
  },
  {
    top: 50,
    left: -5,
    collection: "Chests-of-drawers",
    startingFrom: 0,
  },
  {
    top: 45,
    left: 75,
    collection: "Chairs",
    startingFrom: 0,
  },
  {
    top: 35,
    left: 40,
    collection: "Pots-plants",
    startingFrom: 0,
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
          startingFrom={link.startingFrom}
        />
      ))}
      <div className="lg:hidden absolute w-full h-full flex items-center justify-center">
        <div className="bg-glass-dark shadow-glass backdrop-blur-sm text-white rounded-2xl w-3/4 sm:w-1/2 h-2/5 p-4 no-scrollbar">
          {productNavigationData.map((link, index) => (
            <ProductNavigationLinkBox
              key={index}
              index={index}
              room={room}
              collection={link.collection}
              startingFrom={link.startingFrom}
            />
          ))}
        </div>
      </div>
    </>
  );
};
