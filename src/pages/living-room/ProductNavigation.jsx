import React from "react";
import { ProductNavigationLink } from "../../components/ProductNavigationLink";

const productNavigationData = [
  {
    top: 60,
    left: 18,
    collection: "Sofas",
  },
  {
    top: 75,
    left: 70,
    collection: "Armchair",
  },
  {
    top: 75,
    left: 13,
    collection: "Blankets & throws",
  },
  {
    top: 80,
    left: 28,
    collection: "Carpets",
  },
  {
    top: 70,
    left: 45,
    collection: "Tables",
  },
  {
    top: 50,
    left: 2,
    collection: "Pots & plants",
  },
  {
    top: 53,
    left: 40,
    collection: "Lamps",
  },
  {
    top: 25,
    left: 8,
    collection: "Frames & pictures",
  },
  {
    top: 58,
    left: 76,
    collection: "Vases & bowls",
  },
  {
    top: 20,
    left: 30,
    collection: "Curtains",
  },
  {
    top: 15,
    left: 45,
    collection: "Ceiling lights",
  },
];

export const ProductNavigation = () => {
  return (
    <>
      {productNavigationData.map((link, index) => (
        <ProductNavigationLink
          key={index}
          top={link.top}
          left={link.left}
          collection={link.collection}
        />
      ))}
    </>
  );
};
