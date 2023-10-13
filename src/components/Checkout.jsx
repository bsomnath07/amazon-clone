import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductDetails } from "/";
import { GB_CURRENCY } from "../utils/constants";
// import Payment from "./Payment";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decrementInCart,
  incrementInCart,
} from "../redux/cartSlice";
const Checkout = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const dispatch = useDispatch();
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );
  const handleProceedToCheckout = () => {
    // Store the subtotal value in local storage
    localStorage.setItem("subtotal", subtotal);

    // Navigate to the payment page and pass the subtotal as a query parameter
    navigate("/address");
  };

  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8  gap-10">
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                    <div className="col-span-10 grid-cols-8 divide-y divide-gray-400 ">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="p-4 m-auto"
                            src={product.image_small}
                            alt="abcd"
                          />
                        </Link>
                      </div>
                      <div className="col-span-6">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails product={product} ratings={false} />
                          </Link>
                        </div>
                        <div>
                          <button
                            className=" w-40 text-sm xl:text-base font-semibold rounded text-black bg-yellow-400 mt-2 mb-1 cursor-pointer"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            {" "}
                            Delete from cart
                          </button>
                        </div>
                        <div className="flex flex-cols-3 w-50 text-center">
                          <button
                            className=" w-[50px] text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer mr-3"
                            onClick={() =>
                              dispatch(decrementInCart(product.id))
                            }
                          >
                            -
                          </button>
                          <div className="text-lg xl:text-xl bg-gray-200 w-[50px]">
                            {product.quantity}
                          </div>
                          <button
                            className=" w-[50px] text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer ml-3"
                            onClick={() =>
                              dispatch(incrementInCart(product.id))
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="col-span-3 flex items-center pr-4 justify-end">
                          <div className="text-lg xl:text-xl bg-gray-200 p-2 rounded">
                            {product.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                        {GB_CURRENCY.format(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-lg xl:text-xl text-right mb-4 mr-4">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
          </div>
          <div className="col-span-2 bg-white rounded h-[250px] p-7  ">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
           <div className="sticky top-5">
            {itemsNumber > 0 ? (
              <button className="btn" onClick={handleProceedToCheckout}>
                Proceed to Checkout
              </button>
             ) : (
              <p className="text-black-500 bg-gray-100 text-center mt-4 text-font-bold">
                Your Cart is empty
              </p>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
