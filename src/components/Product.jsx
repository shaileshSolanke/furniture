import React, { useEffect, useState } from "react";
import { formatNumber } from "../utility/utility";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { ProductVarients } from "./ProductVarients";
import { DotLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../redux/productsSlice";

export const Product = ({ product }) => {
  const [varientIndex, setVarientIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { bag } = useSelector((state) => state.bag);
  const isInBag = bag.some(
    (item) => item[0].id === product.varients[varientIndex].id
  );

  function handleMinus() {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    } else {
      alert("Minimum quantity reached");
    }
  }

  function handlePlus() {
    if (quantity <= 4) {
      setQuantity(quantity + 1);
    } else {
      alert("Maximum quantity reached");
    }
  }

  function handleImageLoad() {
    setLoading(false);
  }

  function handleAddToBag() {
    dispatch(addToBag([product?.varients?.[varientIndex], quantity]));
  }

  function handleRemoveFromBag() {
    dispatch(removeFromBag(product?.varients?.[varientIndex]));
  }

  useEffect(() => {
    setVarientIndex(0);
    setQuantity(1);
  }, [product]);

  useEffect(() => {
    setQuantity(1);
  }, [varientIndex]);

  return (
    <div className="w-full h-full text-white flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-2xl">{product.name}</p>
          <p>
            {product.subCollection}, {product.varients[varientIndex].name}
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
        <div
          className={`${
            isInBag ? "hidden" : "visible"
          } bg-white/80 text-black grid grid-cols-3 w-1/4 p-3 rounded-2xl mr-8`}
        >
          <button onClick={handleMinus}>
            <FiMinus className="place-self-center" />
          </button>
          <span className="font-bold place-self-center text-xl">
            {quantity}
          </span>
          <button onClick={handlePlus}>
            <FiPlus className="place-self-center" />
          </button>
        </div>
        <button
          className="bg-black/75 w-2/5 p-3 rounded-2xl"
          onClick={isInBag ? handleRemoveFromBag : handleAddToBag}
        >
          {isInBag ? "Remove from bag" : "Add to bag"}
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
      {loading && (
        <div className="absolute right-0 bottom-0 z-10 w-3/5 aspect-square flex items-center justify-center">
          <DotLoader />
        </div>
      )}
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
