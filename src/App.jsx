import React from "react";
import { Route, Routes } from "react-router-dom";
import { Living } from "./pages/living-room/Living";
import { WorkPlace } from "./pages/workplace-room/WorkPlace";
import { Bed } from "./pages/bed-room/Bed";
import { Kitchen } from "./pages/kitchen-room/Kitchen";
import { PageTransition } from "./components/PageTransition";
import { Products } from "./pages/products/Products";
import { Bag } from "./pages/bag/Bag";
import { Checkout } from "./pages/checkout/Checkout";

function App() {
  return (
    <>
      <PageTransition />
      <Routes>
        <Route path="/" element={<Living />} />
        <Route path="/workplace" element={<WorkPlace />} />
        <Route path="/bed" element={<Bed />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
