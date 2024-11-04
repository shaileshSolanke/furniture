import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BagCount } from "../../components/BagCount";
import { ProductList } from "../../components/ProductList";
import { Product } from "../../components/Product";
import { Warranty } from "../../components/Warranty";
import { ProductDetails } from "../../components/ProductDetails";
import { CheckDeliveryAvailability } from "../../components/checkDeliveryAvailability";
import { CheckStoreStock } from "../../components/checkStoreStock";
import { BarLoader } from "react-spinners";
import { Rooms } from "../../components/Rooms";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [itemIndex, setItemIndex] = useState(0);
  const [varientIndex, setVarientIndex] = useState(0);

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

  if (loading) {
    return (
      <div
        className={`w-full h-screen bg-black bg-${room}-day dark:bg-${room}-night bg-cover bg-no-repeat bg-bottom flex items-center justify-center saturate-150`}
      >
        <div className="p-8 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md rounded-2xl">
          <BarLoader />
        </div>
      </div>
    );
  }

  if (errorMsg !== null) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">
          Something went wrong &#40; {errorMsg} &#41;
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-screen relative bg-black bg-${room}-day dark:bg-${room}-night bg-cover bg-no-repeat bg-bottom lg:flex lg:items-center lg:justify-center saturate-150 p-4 no-scrollbar`}
    >
      <div className="w-full h-full flex flex-col lg:w-11/12 lg:h-5/6 lg:grid lg:grid-rows-10 lg:gap-4">
        <div className="lg:row-span-1 flex items-center justify-between">
          <Rooms />
          <BagCount />
        </div>
        <div className="lg:row-span-11 lg:grid lg:grid-cols-12 lg:gap-4">
          <div className="my-4 lg:m-0 h-28 lg:h-full col-span-3 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white rounded-2xl overflow-hidden">
            {products.length ? (
              <ProductList
                products={products}
                itemIndex={itemIndex}
                setItemIndex={setItemIndex}
                setVarientIndex={setVarientIndex}
              />
            ) : (
              <div className="h-full flex items-center justify-center">
                Nothing to select
              </div>
            )}
          </div>
          <div className="col-span-6 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white p-4 lg:p-8 rounded-2xl">
            {products[itemIndex] ? (
              <Product
                product={products[itemIndex]}
                varientIndex={varientIndex}
                setVarientIndex={setVarientIndex}
              />
            ) : (
              <div className="h-full flex items-center justify-center p-4">
                No product selected
              </div>
            )}
          </div>
          <div className="my-4 flex flex-col-reverse lg:my-0 lg:col-span-3 lg:grid lg:grid-rows-12 lg:gap-4">
            <div className="lg:row-span-5 lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white p-4 rounded-2xl lg:flex lg:items-center lg:justify-center mb-4 lg:mb-0">
                <CheckDeliveryAvailability />
              </div>
              <div className="bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white p-4 rounded-2xl lg:flex lg:items-center lg:justify-center">
                <CheckStoreStock />
              </div>
            </div>
            <div className="lg:row-span-2 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white font-bold p-4 rounded-2xl flex items-center justify-center my-4 lg:my-0">
              {products[itemIndex] ? (
                <Warranty product={products[itemIndex]} />
              ) : (
                <p className="font-medium p-4">
                  No warranty provided{" "}
                  <Link to="/" className="underline text-blue-300">
                    read more
                  </Link>
                </p>
              )}
            </div>
            <div className="row-span-5 bg-glass-dark dark:bg-glass shadow-glass backdrop-blur-md text-white font-bold rounded-2xl h-full overflow-y-auto relative no-scrollbar">
              {products[itemIndex] ? (
                <ProductDetails product={products[itemIndex]} />
              ) : (
                <p className="flex items-center justify-center h-full font-medium p-4">
                  No more information
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
