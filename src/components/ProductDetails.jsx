import React from "react";

export const ProductDetails = ({ product }) => {
  const details = product.details;
  return (
    <div className="absolute p-4">
      <p>
        Designer &#58;{" "}
        <span className="font-medium">{details?.designer || "Unknown"}</span>
      </p>
      {details.description.map((eachLine, index) => (
        <p key={index} className="text-justify text-sm font-medium py-1">
          {eachLine}
        </p>
      ))}
      <p>
        Country of origin &#58;{" "}
        <span className="font-medium">{details?.countryOfOrigin || "NA"}</span>
      </p>
    </div>
  );
};
