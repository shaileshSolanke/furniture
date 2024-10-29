import React, { useState } from "react";
import { formatNumber } from "../utility/utility";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { ProductVarients } from "./ProductVarients";

export const Product = ({ product }) => {
  const [varientIndex, setVarientIndex] = useState(1);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  function handleMinus() {
    if (count >= 2) {
      setCount(count - 1);
    } else {
      alert("Minimum quantity reached");
    }
  }
  function handlePlus() {
    if (count <= 4) {
      setCount(count + 1);
    } else {
      alert("Maximum quantity reached");
    }
  }
  function handleImageLoad() {
    setLoading(false);
  }
  return (
    <div className="w-full h-full text-white flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-2xl">{product.name}</p>
          <p>
            {product.subCollection},{product.varients[varientIndex].name}
          </p>
          <div className="flex">
            <div
              className={`bg-gradient-to-r from-white from-10% via-white via-80% to-black/5 to-${product.rating}% bg-clip-text`}
            >
              <span className="text-transparent">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            <span className="ml-2">{product.rating / 20}</span>
          </div>
        </div>
        <div>
          <p className="text-5xl">
            &#8377;{formatNumber(product.varients[varientIndex].price)}
          </p>
          <p className="line-through font-extralight">
            &#8377;{formatNumber(product.varients[varientIndex].mrp)}
          </p>
        </div>
      </div>
      <p className="w-2/5 text-justify relative">{product.description}</p>
      <div className="w-3/4 flex relative z-20">
        <div className="bg-white/80 text-black grid grid-cols-3 w-1/4 p-3 rounded-2xl mr-8">
          <button onClick={handleMinus}>
            <FiMinus className="place-self-center" />
          </button>
          <span className="font-bold place-self-center text-xl">{count}</span>
          <button onClick={handlePlus}>
            <FiPlus className="place-self-center" />
          </button>
        </div>
        <button className="bg-black/75 w-2/5 p-3 rounded-2xl">
          Add to Bag
        </button>
      </div>
      <div className="flex">
        {product.varients[varientIndex].media.map((src, index) => (
          <img
            key={index}
            src={`https://shaileshsolanke.github.io/data/${src}`}
            className="w-1/12 m-1 rounded-lg shadow-sm hover:scale-150 transition-all"
          />
        ))}
      </div>
      <img
        src={`https://shaileshsolanke.github.io/data/${product.varients[varientIndex].src}`}
        onLoad={handleImageLoad}
        className={`absolute right-0 bottom-0 z-10 w-3/5 ${
          loading ? "hidden" : "block"
        }`}
      />
      <ProductVarients
        colors={product.varientsColor}
        varientIndex={varientIndex}
        setVarientIndex={setVarientIndex}
      />
    </div>
  );
};
