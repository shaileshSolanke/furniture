import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CheckDeliveryAvailability = () => {
  return (
    <div>
      <TbTruckDelivery className="fill-white size-16 place-self-center" />
      <p className="text-center text-2xl">Delivery</p>
      <p className="text-center">Check delivery</p>
      <p className="text-center">availability</p>
      <Link to="/">
        <FaArrowRightLong className="place-self-center h-full m-2"/>
      </Link>
    </div>
  );
};
