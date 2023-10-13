import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Address = () => {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    pinCode: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    validateForm(formData);
    // eslint-disable-next-line 
  }, [formData]);

  const validateForm = (formData) => {
    const { street, city, state, pinCode } = formData;
    if (pinCode.length !== 6 || !/^\d{6}$/.test(pinCode)) {
      setIsButtonDisabled(true);
      if (pinCode.length > 6) {
        alert('Pin code cannot be greater than 6 digits');
      }
    } else if (street.trim() === '' || !/^[A-Za-z\s]+$/.test(city) || !/^[A-Za-z\s]+$/.test(state)) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in local storage
    console.log('Form data to be stored:', formData);
     localStorage.setItem('address', JSON.stringify(formData));
  };

  return (
    <div className="max-w-md mx-auto p-5">
      <form 
       onClick={handleSubmit}
    //   onSubmit={handleSubmit} 
      className="space-y-4">
        <div>
          <label htmlFor="street" className="block text-sm font-medium text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">
            Pin Code (6 digits)
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
         <Link to={"/payment"}>
          <button type="submit"  className={`bg-blue-500 text-white p-2 rounded-md w-full ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
          Proceed to Payment
          </button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Address;
