import React from "react";

export const ProductVarients = ({ colors, varientIndex, setVarientIndex }) => {
  return (
    <div className="mt-4 place-self-end sm:absolute sm:top-[30%] sm:right-[8%] sm:z-20 md:bottom-[0] md:right-[0] md:p-8">
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
