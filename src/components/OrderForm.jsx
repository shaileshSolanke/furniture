import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../redux/customerSlice";

export const OrderForm = ({ setAddressCollected }) => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
  });
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="p-4 w-full h-full">
      <div className="py-2 mb-2">
        <h1 className="text-3xl font-bold">Billing/Shipping Address</h1>
        <p className="text-sm text-white/75">&#42; denotes required field</p>
      </div>
      <form
        className="h-full w-full"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addCustomer(details));
          setAddressCollected(true);
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="firstName">First Name &#42;</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              placeholder="Shailesh"
              value={details.firstName}
              onChange={handleChange}
              className="p-2 outline-none rounded bg-glass-dark placeholder:text-white/50"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="lastName">Last Name &#42;</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              placeholder="Solanke"
              value={details.lastName}
              onChange={handleChange}
              className="p-2 outline-none rounded bg-glass-dark placeholder:text-white/50"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email">Email Address &#42;</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="shaileshsolanke512@gmail.com"
            value={details.email}
            onChange={handleChange}
            className="p-2 outline-none rounded bg-glass-dark placeholder:text-white/50"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="addressLineOne">Address Line 1 &#42;</label>
          <input
            type="text"
            name="addressLineOne"
            id="addressLineOne"
            required
            placeholder="Apartment / Block / Suite"
            value={details.addressLineOne}
            onChange={handleChange}
            className="p-2 outline-none rounded bg-glass-dark placeholder:text-white/50"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="addressLineTwo">Address Line 2</label>
          <input
            type="text"
            name="addressLineTwo"
            id="addressLineTwo"
            placeholder="co / Street / Landmark"
            value={details.addressLineTwo}
            onChange={handleChange}
            className="p-2 outline-none rounded bg-glass-dark placeholder:text-white/50"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="city">City &#42;</label>
            <input
              type="text"
              name="city"
              id="city"
              required
              placeholder="Pune"
              value={details.city}
              onChange={handleChange}
              className="p-2 outline-none rounded bg-glass-dark placeholder:text-white/50"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="state">State &#42;</label>
            <input
              type="text"
              name="state"
              id="state"
              required
              placeholder="Maharashtra"
              value={details.state}
              onChange={handleChange}
              className="p-2 outline-none rounded bg-glass-dark placeholder:text-white/50"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="zip">ZIP &#42;</label>
            <input
              type="text"
              name="zip"
              id="zip"
              required
              placeholder="012345"
              value={details.zip}
              onChange={handleChange}
              className="p-2 outline-none rounded bg-glass-dark placeholder:text-white/50"
              pattern="^\d{6}$"
              title="ZIP should be exactly 6 digits"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="phoneNumber">Phone Number &#42;</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              required
              placeholder="0123456789"
              value={details.phoneNumber}
              onChange={handleChange}
              className="p-2 outline-none rounded bg-glass-dark placeholder:text-white/50"
              pattern="^\d{10}$"
              title="Phone Number should be exactly 10 digits"
            />
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="bg-white p-2 rounded text-black font-bold w-full"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
