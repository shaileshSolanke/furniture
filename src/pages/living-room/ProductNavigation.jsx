import React from "react";
import { ProductNavigationLink } from "../../components/ProductNavigationLink";

const productNavigationData = [
  {
    top: 50,
    left: 15,
    collection: "Sofas",
  },
  {
    top: 65,
    left:65,
    collection: "Armchairs",
  },
  {
    top: 65,
    left: 10,
    collection: "Blankets & throws",
  },
  {
    top: 70,
    left: 25,
    collection: "Carpets",
  },
  {
    top: 65,
    left: 40,
    collection: "Tables",
  },
  {
    top: 45,
    left: -4,
    collection: "Pots & plants",
  },
  {
    top: 45,
    left: 35,
    collection: "Lamps",
  },
  {
    top: 20,
    left: 5,
    collection: "Frames & pictures",
  },
  {
    top: 47,
    left: 72,
    collection: "Decorative accessories",
  },
  {
    top: 25,
    left: 25,
    collection: "Curtains",
  },
  {
    top: 8,
    left: 40,
    collection: "Ceiling lights",
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
    </>
  );
};
