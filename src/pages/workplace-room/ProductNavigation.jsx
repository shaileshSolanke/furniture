import React from "react";
import { ProductNavigationLink } from "../../components/ProductNavigationLink";
import { ProductNavigationLinkBox } from "../../components/ProductNavigationLinkBox";

const productNavigationData = [
  {
    top: 40,
    left: 55,
    collection: "Shelving-units",
    startingFrom: 0,
  },
  {
    top: 60,
    left: 25,
    collection: "Dining-sets",
    startingFrom: 0,
  },
  {
    top: 45,
    left: 25,
    collection: "Coffee-tea",
    startingFrom: 0,
  },
  {
    top: 65,
    left: 40,
    collection: "Dining-chairs",
    startingFrom: 0,
  },
  {
    top: 50,
    left: 15,
    collection: "Dining-tables",
    startingFrom: 0,
  },
  {
    top: -5,
    left: 20,
    collection: "Pendant-lighting",
    startingFrom: 0,
  },
  {
    top: 0,
    left: 0,
    collection: "Poster-with-frame",
    startingFrom: 0,
  },
  {
    top: 30,
    left: 35,
    collection: "Chairs",
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
