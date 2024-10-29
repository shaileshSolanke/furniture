import React from "react";

export const ProductVarients = ({ colors, varientIndex, setVarientIndex }) => {
  return (
    <div className="absolute z-20 bottom-0 right-0 p-8">
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
