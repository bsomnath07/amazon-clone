import React, { useEffect, useState } from "react";

const ReturnAndOrder = () => {
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() => {
    // Retrieve the ordered products from local storage
    const storedProducts = localStorage.getItem("oldCart");
    if (storedProducts) {   
      const { products } = JSON.parse(storedProducts);     
       setOrderedProducts(products);
    }
  }, []);

  
  console.log("orderedProducts",orderedProducts);

  const handleClearSection = () => {
    // Clear the ordered products in local storage
    localStorage.removeItem("oldCart");
    // Clear the ordered products in state
    setOrderedProducts([]);
  };

  return (
    <div className="bg-gray-200">
    
      <div className="flex flex-col items-center p-6 bg-white">
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md mb-4">
        {orderedProducts.length > 0 ? (
        <div className="bg-gray-100 p-4 mb-4">
          <h2 className="text-4xl font-semibold mt-1 ">
            Your Ordered Items
          </h2>
         </div>      
        ) : (
          <div className="bg-gray-100 p-4 mb-4">
          <h2 className="text-3xl font-semibold mt-1 ">
            You haven't ordered any items
          </h2>
         </div>
        )}{" "}
        {orderedProducts.length > 0 && (
          <div className="w-full mt-1">
            <button
              onClick={handleClearSection}
              className="bg-red-500 text-white py-2 px-4 rounded-md  "
            >
              Clear the Return & Order list
            </button>
          </div>
        )}
     </div>
        <div className="flex flex-wrap justify-center">
          {orderedProducts.map((product) => (
            <div
              key={product.id}
              className=" bg-gray-100 p-4 rounded-md shadow-md m-4"
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: `${product.imageWidth || "200"}px`,
                  height: `${product.imageHeight || "auto"}px`,
                }}
              />
              <p className="text-lg font-semibold mb-2">{product.title}</p>
              <p className="text-sm font-semibold mb-2">
                Quantity: {product.quantity}
              </p>
              <p className="text-sm font-semibold mb-2">
                Price: ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReturnAndOrder;
