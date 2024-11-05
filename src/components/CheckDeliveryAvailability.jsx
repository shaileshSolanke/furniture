import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CheckDeliveryAvailability = () => {
  return (
    <Link to="/" className="flex items-center justify-between lg:block">
      <TbTruckDelivery className="fill-white size-16 lg:place-self-center" />
      <div>
        <p className="text-center text-2xl hidden sm:block">Delivery</p>
        <p className="text-center">Check delivery</p>
        <p className="text-center">availability</p>
      </div>
      <FaArrowRightLong className="size-8 lg:place-self-center lg:h-full lg:m-2" />
    </Link>
  );
};
