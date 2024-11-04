import React from "react";

export const ProductVarients = ({ colors, varientIndex, setVarientIndex }) => {
  return (
    <div className="mt-4 place-self-end lg:place-self-start lg:absolute lg:z-20 lg:bottom-0 lg:right-0 lg:p-8">
      {colors.map((color, index) => (
        <button
          key={index}
          className="p-4 rounded-full ml-4 border-2 border-white"
          style={
            varientIndex === index
              ? { background: color, borderColor: "#fff" }
              : { background: color, borderColor: "transparent" }
          }
          onClick={() => setVarientIndex(index)}
        ></button>
      ))}
    </div>
  );
};
