import React from "react";
import { useSelector } from "react-redux";

export const OSone = () => {
  const bag = useSelector((state) => state.bag);
  const [customer] = useSelector((state) => state.customer);
  const date = new Date();
  const today = date.toDateString();
  return (
    <div className="lg:absolute p-4 lg:p-8">
      <p>
        Order Number &#58;{" "}
        <span className="font-bold">
          F00{Math.floor(1000 + Math.random() * 9000)}
        </span>
      </p>
      <p>
        Order Date &#58; <span className="font-bold">{today}</span>
      </p>
      <p>
        Customer Name &#58;{" "}
        <span className="font-bold">
          {customer.firstName} {customer.lastName}
        </span>
      </p>
      <p className="text-justify font-light my-2">
        Please keep the above numbers for your reference. We'll also send a
        confirmation to the email address you used for this order. Please allow
        up to 24 hours for us to process your order for shipment.
      </p>
      <p className="font-bold my-2">Billing/Shipping Address</p>
      <p className="font-light">
        {customer.firstName} {customer.lastName}
      </p>
      <p className="font-light">
        {customer.addressLineOne + " " + customer.addressLineTwo}
      </p>
      <p className="font-light">
        {customer.city}, {customer.state}, {customer.zip}
      </p>
      <p className="my-2">
        Shipping Method &#58;{" "}
        <span className="font-bold">5&#45;6 Business Days</span>
      </p>
    </div>
  );
};
