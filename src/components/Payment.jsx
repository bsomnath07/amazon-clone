import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import OrderConfirmation from "./OrderConfirmation";
import { useDispatch} from "react-redux";
import { reduceCartToZero  } from '../redux/cartSlice';

const Payment = () => {
  const dispatch = useDispatch()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [cardInfo, setCardInfo] = useState({
    name: "",
    cardNumber: "----------------",
    expiryDate: "",
  });
  // const [cardNumber, setCardNumber] = useState("");
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleCardInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Do not update state if the input contains non-alphabet characters
    }
    if (name === "cardNumber") {
      // Remove any non-numeric characters
      const numericValue = value.replace(/\D/g, "");

      // Check if the numericValue is exactly 16 digits long
      if (numericValue.length <= 16) {
        // const paddedValue = numericValue.padEnd(16, "-");
        setCardInfo({
          ...cardInfo,
          [name]: numericValue,
        });
      } else {
        // Display a warning message when the card number exceeds 16 digits
        alert("Card number cannot be greater than 16 digits.");
      }
    } else {
      setCardInfo({
        ...cardInfo,
        [name]: value,
      });
    }
  };
  
  const isCardInfoValid = cardInfo.cardNumber.replace(/-/g, "").length === 16;

  const isProceedToPaymentEnabled =
    (selectedPaymentMethod === "card" && isCardInfoValid) ||
    selectedPaymentMethod === "cod";

  const handlePaymentSubmit = () => {
    if (isProceedToPaymentEnabled) {
      if (selectedPaymentMethod === "card") {
        console.log("Card Info:", cardInfo);
      } else if (selectedPaymentMethod === "cod") {
        console.log("Cash On Delivery selected");
      }
      dispatch(reduceCartToZero())
      navigate("/order-confirmation");
    }
  };

  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-4">Select Payment Method</h2>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="card"
              checked={selectedPaymentMethod === "card"}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            <span className="text-lg">Debit/Credit Card</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="cod"
              checked={selectedPaymentMethod === "cod"}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            <span className="text-lg">Cash On Delivery</span>
          </label>
        </div>
        {selectedPaymentMethod === "card" && (
          <div>
            <label className="block mb-2">
              Cardholder's Name:
              <input
                type="text"
                name="name"
                value={cardInfo.name}
                onChange={handleCardInfoChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>
            <label className="block mb-2">
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={cardInfo.cardNumber}
                onChange={handleCardInfoChange}
                className={`w-full border border-gray-300 rounded-md p-2 card-number-input`}
              />
            </label>

            <label className="block mb-2">
              Expiry Date:
              <div className="flex space-x-2">
                <select
                  name="expiryMonth"
                  value={cardInfo.expiryMonth}
                  onChange={handleCardInfoChange}
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option
                      key={i + 1}
                      value={(i + 1).toString().padStart(2, "0")}
                    >
                      {(i + 1).toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <select
                  name="expiryYear"
                  value={cardInfo.expiryYear}
                  onChange={handleCardInfoChange}
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                >
                  <option value="" disabled>
                    Year
                  </option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </label>
          </div>
        )}
        <button
          onClick={handlePaymentSubmit}
          disabled={!isProceedToPaymentEnabled}
          className={`${
            isProceedToPaymentEnabled
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          } text-white py-2 px-4 rounded-md mt-4`}
        >
          Proceed to Place Order
        </button>
      </div>
    </div>
  );
};
export default Payment;
