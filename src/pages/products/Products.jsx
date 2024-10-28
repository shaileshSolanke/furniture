import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartCount } from "../../components/CartCount";
import { ProductList } from "../../components/ProductList";
import { Product } from "../../components/Product";
import { Warranty } from "../../components/Warranty";
import { ProductDetails } from "../../components/ProductDetails";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [itemIndex, setItemIndex] = useState(0);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const room = useQuery().get("room");
  const collection = useQuery().get("collection");

  async function fetchProducts() {
    try {
      const response = await fetch(
        "https://shaileshsolanke.github.io/data/furniture/data.json"
      );
      const data = await response.json();
      if (data) {
        const filteredProducts = data.filter(
          (item) => item.collection === collection
        );
        setProducts(filteredProducts);
        if (filteredProducts.length > 0) {
          setItemIndex(0);
        }
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      className={`w-full h-screen relative bg-black bg-${room}-day dark:bg-${room}-night bg-cover bg-no-repeat bg-bottom flex items-center justify-center saturate-150`}
    >
      <div className="w-11/12 h-5/6 grid grid-rows-10 gap-4">
        <div className="row-span-1 place-self-end">
          <CartCount />
        </div>
        <div className="row-span-11 grid grid-cols-12 gap-4">
          <div className="col-span-3 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white rounded-2xl overflow-hidden">
            <ProductList
              products={products}
              itemIndex={itemIndex}
              setItemIndex={setItemIndex}
            />
          </div>
          <div className="col-span-6 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white p-8 rounded-2xl">
            {products[itemIndex] ? (
              <Product product={products[itemIndex]} />
            ) : (
              <div>No product selected</div>
            )}
          </div>
          <div className="col-span-3 grid grid-rows-12 gap-4">
            <div className="row-span-5 grid grid-cols-2 gap-4">
              <div className="bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white p-4 rounded-2xl"></div>
              <div className="bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white p-4 rounded-2xl"></div>
            </div>
            <div className="row-span-2 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white font-bold p-4 rounded-2xl flex items-center justify-center">
              {products[itemIndex] ? (
                <Warranty product={products[itemIndex]} />
              ) : (
                <p className="">
                  No warranty provided{" "}
                  <Link to="" className="underline text-blue-500">
                    read more
                  </Link>
                </p>
              )}
            </div>
            <div className="row-span-5 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white font-bold rounded-2xl h-full overflow-y-auto relative">
              {products[itemIndex] ? (
                <ProductDetails product={products[itemIndex]} />
              ) : (
                <div className="flex items-center justify-center h-full">
                  No more information
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
