import React from 'react'

const OrderConfirmation = () => {


  const storedAddress = JSON.parse(localStorage.getItem('address'));
  const name=JSON.parse(localStorage.getItem('username'))

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-md mx-auto mt-8 ">
      <h1 className='text-2xl font-semibold mb-4'>hello.. {name}</h1><br/>
      <h2 className="text-2xl font-semibold mb-4">Your Order Has Been Placed</h2>
      <p className="text-lg">
    
        Thank you for your order. You will receive a confirmation email shortly.
      </p>

      
      {storedAddress && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
        
          <p>Street: {storedAddress.street}</p>
          <p>City: {storedAddress.city}</p>
          <p>State: {storedAddress.state}</p>
          <p>Pin Code: {storedAddress.pinCode}</p>
        </div>
      )}
    </div>
  );
  
}

export default OrderConfirmation
