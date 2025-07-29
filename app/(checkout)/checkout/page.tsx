"use client";
import { useCartContext } from "@/context/CartProvider";
import { shortenName } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CheckoutModal from "@/components/shared/CheckoutModal";

const CheckoutPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eNumber: "",
    ePin: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const { cart } = useCartContext();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const vatPrice = (totalPrice * 20) / 100;
  const shippingPrice = 50;
  const grandTotal = totalPrice + shippingPrice + vatPrice;

  // Validation rules
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value))
          return "Name can only contain letters and spaces";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";

      case "phone":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ""))) {
          return "Please enter a valid phone number";
        }
        return "";

      case "address":
        if (!value.trim()) return "Address is required";
        if (value.trim().length < 10) return "Please enter a complete address";
        return "";

      case "zip":
        if (!value.trim()) return "ZIP code is required";
        if (!/^\d{5}(\-\d{4})?$/.test(value))
          return "Please enter a valid ZIP code (e.g., 12345 or 12345-6789)";
        return "";

      case "city":
        if (!value.trim()) return "City is required";
        if (value.trim().length < 2)
          return "City must be at least 2 characters";
        if (!/^[a-zA-Z\s\-\.]+$/.test(value))
          return "City can only contain letters, spaces, hyphens, and periods";
        return "";

      case "country":
        if (!value.trim()) return "Country is required";
        if (value.trim().length < 2)
          return "Country must be at least 2 characters";
        if (!/^[a-zA-Z\s\-\.]+$/.test(value))
          return "Country can only contain letters, spaces, hyphens, and periods";
        return "";

      case "eNumber":
        if (formData.paymentMethod === "e-money") {
          if (!value.trim()) return "e-Money number is required";
          if (!/^\d{8,12}$/.test(value))
            return "e-Money number must be 8-12 digits";
        }
        return "";

      case "ePin":
        if (formData.paymentMethod === "e-money") {
          if (!value.trim()) return "e-Money PIN is required";
          if (!/^\d{4,6}$/.test(value)) return "e-Money PIN must be 4-6 digits";
        }
        return "";

      default:
        return "";
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const fieldsToValidate = [
      "name",
      "email",
      "phone",
      "address",
      "zip",
      "city",
      "country",
    ];

    if (formData.paymentMethod === "e-money") {
      fieldsToValidate.push("eNumber", "ePin");
    }

    fieldsToValidate.forEach((field) => {
      const error = validateField(
        field,
        formData[field as keyof typeof formData]
      );
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Real-time validation for better UX
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allFields = [
      "name",
      "email",
      "phone",
      "address",
      "zip",
      "city",
      "country",
    ];
    if (formData.paymentMethod === "e-money") {
      allFields.push("eNumber", "ePin");
    }

    const newTouched: Record<string, boolean> = {};
    allFields.forEach((field) => {
      newTouched[field] = true;
    });
    setTouched(newTouched);

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted successfully:", formData);
      // Add your form submission logic here
    } else {
      console.log("Form has validation errors");
    }
    setFormSubmitted(true);
  };

  // Helper function to get input classes based on validation state
  const getInputClasses = (fieldName: string) => {
    const baseClasses =
      "py-3.75 px-4 border rounded-md placeholder:font-bold placeholder:text-sm placeholder:text-dark-100/40";
    const hasError = errors[fieldName];

    if (hasError) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500`;
    }

    return `${baseClasses} border-[#cfcfcf] focus:border-primary-500 focus:ring-1 focus:ring-primary-500`;
  };

  return (
    <div>
      {formSubmitted && <CheckoutModal />}
      <div className=" bg-light-200 pt-6 sm:pt-14 lg:pt-21 pb-24 sm:pb-29 lg:pb-35">
        <button
          className="body text-dark-100/50 pb-4 pl-8 sm:pl-10 lg:pl-41 sm:pb-7 cursor-pointer"
          onClick={() => router.back()}
        >
          Go back
        </button>

        <form
          onSubmit={formSubmitHandler}
          className="mx-8 sm:mx-10 lg:mx-41 flex flex-col lg:flex-row gap-8"
        >
          <div className="px-8 sm:px-10 lg:w-2/3 rounded-md bg-light-100 pt-8 pb-0.5">
            <h4 className="h4-bold sm:h3-bold">Checkout</h4>
            <p className="subtitle text-primary-500 pt-10 sm:pt-13 pb-7">
              billing details
            </p>

            <div className="sm:grid grid-cols-2 gap-x-4">
              {/* Name */}
              <div className="flex flex-col gap-3 pb-7">
                <label
                  className="text-xs font-bold text-dark-100"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className={getInputClasses("name")}
                  placeholder="Alexei Ward"
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={inputHandler}
                  onBlur={handleBlur}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs font-medium">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3 pb-7">
                <label
                  className="text-xs font-bold capitalize text-dark-100"
                  htmlFor="email"
                >
                  email address
                </label>
                <input
                  className={getInputClasses("email")}
                  placeholder="alexei@mail.com"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={inputHandler}
                  onBlur={handleBlur}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs font-medium">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-3">
                <label
                  className="text-xs font-bold capitalize text-dark-100"
                  htmlFor="phone-number"
                >
                  phone number
                </label>
                <input
                  className={getInputClasses("phone")}
                  placeholder="+1 202-555-0136"
                  id="phone-number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={inputHandler}
                  onBlur={handleBlur}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs font-medium">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Shipping */}
            <p className="subtitle text-primary-500 pt-10 sm:pt-15 pb-7">
              shipping info
            </p>
            <div className="sm:grid grid-cols-2 gap-x-4">
              {/* Address */}
              <div className="flex flex-col col-span-2 gap-3 pb-7">
                <label
                  className="text-xs font-bold text-dark-100"
                  htmlFor="address"
                >
                  Your Address
                </label>
                <input
                  className={getInputClasses("address")}
                  placeholder="1137 Williams Avenue"
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={inputHandler}
                  onBlur={handleBlur}
                />
                {errors.address && (
                  <span className="text-red-500 text-xs font-medium">
                    {errors.address}
                  </span>
                )}
              </div>

              {/* ZIP Code */}
              <div className="flex flex-col gap-3 pb-7">
                <label
                  className="text-xs font-bold capitalize text-dark-100"
                  htmlFor="zip-code"
                >
                  zip code
                </label>
                <input
                  className={getInputClasses("zip")}
                  placeholder="10001"
                  id="zip-code"
                  name="zip"
                  type="text"
                  value={formData.zip}
                  onChange={inputHandler}
                  onBlur={handleBlur}
                />
                {errors.zip && (
                  <span className="text-red-500 text-xs font-medium">
                    {errors.zip}
                  </span>
                )}
              </div>

              {/* City */}
              <div className="flex flex-col gap-3 pb-7">
                <label
                  className="text-xs font-bold capitalize text-dark-100"
                  htmlFor="city"
                >
                  city
                </label>
                <input
                  className={getInputClasses("city")}
                  placeholder="New York"
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={inputHandler}
                  onBlur={handleBlur}
                />
                {errors.city && (
                  <span className="text-red-500 text-xs font-medium">
                    {errors.city}
                  </span>
                )}
              </div>

              {/* Country */}
              <div className="flex flex-col gap-3">
                <label
                  className="text-xs font-bold capitalize text-dark-100"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  className={getInputClasses("country")}
                  placeholder="United States"
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={inputHandler}
                  onBlur={handleBlur}
                />
                {errors.country && (
                  <span className="text-red-500 text-xs font-medium">
                    {errors.country}
                  </span>
                )}
              </div>
            </div>

            {/* Payment Details */}
            <p className="subtitle text-primary-500 pt-10 sm:pt-15 pb-7">
              payment details
            </p>

            <fieldset className="sm:grid sm:grid-cols-2 pb-7">
              <p className="text-xs font-bold capitalize text-dark-100 pb-3">
                payment method
              </p>
              <div className="flex flex-col gap-4">
                <label className="flex text-sm font-bold items-center gap-3 border py-3.75 px-4 rounded-md">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="e-money"
                    className="accent-primary-500"
                    onChange={inputHandler}
                    checked={formData.paymentMethod === "e-money"}
                  />
                  <span className="text-sm font-bold text-dark-100">
                    e-Money
                  </span>
                </label>

                <label className="flex text-sm font-bold items-center gap-3 border py-3.75 px-4 rounded-md">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash-on-delivery"
                    className="accent-primary-500"
                    onChange={inputHandler}
                    checked={formData.paymentMethod === "cash-on-delivery"}
                  />
                  <span className="text-sm font-bold text-dark-100">
                    Cash on Delivery
                  </span>
                </label>
              </div>
            </fieldset>

            {/* E-Money Fields */}
            {formData.paymentMethod === "e-money" && (
              <div className="sm:flex items-start gap-4">
                <div className="flex flex-col gap-3 pb-7 w-full">
                  <label
                    className="text-xs font-bold capitalize text-dark-100"
                    htmlFor="e-money"
                  >
                    e-Money Number
                  </label>
                  <input
                    className={getInputClasses("eNumber")}
                    placeholder="238521993"
                    name="eNumber"
                    id="e-money"
                    type="text"
                    onChange={inputHandler}
                    onBlur={handleBlur}
                    value={formData.eNumber}
                  />
                  {errors.eNumber && (
                    <span className="text-red-500 text-xs font-medium">
                      {errors.eNumber}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <label
                    className="text-xs font-bold capitalize text-dark-100"
                    htmlFor="e-pin"
                  >
                    e-Money PIN
                  </label>
                  <input
                    className={getInputClasses("ePin")}
                    placeholder="6891"
                    name="ePin"
                    id="e-pin"
                    type="text"
                    onChange={inputHandler}
                    onBlur={handleBlur}
                    value={formData.ePin}
                  />
                  {errors.ePin && (
                    <span className="text-red-500 text-xs font-medium">
                      {errors.ePin}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Summary container */}
          <div className=" px-8 sm:px-10 lg:w-1/3 h-fit rounded-md bg-light-100 pt-9 pb-8">
            <h4 className="h4-bold">Summary</h4>
            <ul className="pt-10">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between pb-8 items-center gap-4"
                >
                  <div className="flex w-2/3 items-center gap-4">
                    <Image
                      src={item.image.desktop}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-1/3 rounded-md"
                    />

                    <div className="w-1/2">
                      <p className="font-bold text-[15px] uppercase">
                        {shortenName(item.name)}
                      </p>
                      <p className="text-dark-100/50 text-[14px] font-bold">
                        {`$${item.price}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-[15px] font-bold text-dark-100/50">
                    <p>x</p>
                    <p>{item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="body uppercase text-dark-100/50">total</p>
                <p className="h6-bold">{`$${totalPrice}`}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="body uppercase text-dark-100/50">shipping</p>
                <p className="h6-bold">{`$${shippingPrice}`}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="body uppercase text-dark-100/50">
                  VAT (INCLUDED)
                </p>
                <p className="h6-bold">{`$${vatPrice}`}</p>
              </div>
              <div className="flex items-center justify-between py-4">
                <p className="body uppercase text-dark-100/50">grand total</p>
                <p className="h6-bold text-primary-500">{`$${grandTotal}`}</p>
              </div>
              <Button label="Continue & pay" typeButton="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
