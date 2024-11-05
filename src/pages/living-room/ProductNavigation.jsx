import React from "react";
import { ProductNavigationLink } from "../../components/ProductNavigationLink";
import { ProductNavigationLinkBox } from "../../components/ProductNavigationLinkBox";

const productNavigationData = [
  {
    top: 50,
    left: 15,
    collection: "Sofas",
    startingFrom: 20990,
  },
  {
    top: 65,
    left: 65,
    collection: "Chairs",
    startingFrom: 8990,
  },
  {
    top: 65,
    left: 10,
    collection: "Blankets-throws",
    startingFrom: 599,
  },
  {
    top: 70,
    left: 25,
    collection: "Carpets",
    startingFrom: 0,
  },
  {
    top: 65,
    left: 40,
    collection: "Tables",
    startingFrom: 0,
  },
  {
    top: 45,
    left: -4,
    collection: "Pots-plants",
    startingFrom: 0,
  },
  {
    top: 45,
    left: 35,
    collection: "Lamps",
    startingFrom: 0,
  },
  {
    top: 20,
    left: 5,
    collection: "Frames-pictures",
    startingFrom: 0,
  },
  {
    top: 47,
    left: 72,
    collection: "Decorative-accessories",
    startingFrom: 0,
  },
  {
    top: 25,
    left: 25,
    collection: "Curtains",
    startingFrom: 0,
  },
  {
    top: 8,
    left: 40,
    collection: "Ceiling-lights",
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
