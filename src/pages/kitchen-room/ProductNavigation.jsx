import React from "react";
import { ProductNavigationLink } from "../../components/ProductNavigationLink";

const productNavigationData = [
  {
    top: 35,
    left: 37,
    collection: "Cookware",
  },
  {
    top: 30,
    left: 14,
    collection: "Kitchen taps & sinks",
  },
  {
    top: 45,
    left: 45,
    collection: "Dining sets",
  },
  {
    top: 40,
    left: 60,
    collection: "Coffee & tea",
  },
  {
    top: 60,
    left: 35,
    collection: "Dining Chairs",
  },
  {
    top: 45,
    left: 25,
    collection: "Dining tables",
  },
  {
    top: 5,
    left: 40,
    collection: "Pendant lighting",
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
    </>
  );
};
