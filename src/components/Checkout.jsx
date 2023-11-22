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

    navigate("/address");
  };

  return (
    <div className="h-full bg-gray-200">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8  gap-10">
          <div className="col-span-6 bg-gray-200">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-12  mr-4">
                    <div className="col-span-10 grid-cols-8 ">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}></Link>
                        <img
                          className="p-4 ml-6 w-full h-full"
                          style={{ width: "250px", height: "250px" }}
                          src={product.image}
                          alt={"abc"}
                        />
                        <div className="col-span-2">
                          <div className="text-lg xl:text-xl mt-2 ml-6 font-semibold">
                            <span>price</span>{" "}
                            {GB_CURRENCY.format(product.price)}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="font-medium text-black mt-2 ml-6">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails product={product} ratings={false} />
                          </Link>
                        </div>
                        <div className="ml-6 mt-2 mb-1">
                          <button
                            className=" w-40 text-sm xl:text-base font-semibold rounded text-black bg-yellow-400  hover:bg-orange-400 cursor-pointer"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            {" "}
                            Delete from cart
                          </button>
                        </div>

                        <div className="flex flex-cols-3 w-50 text-center ml-6 ">
                          <button
                            className=" w-[50px] text-xl xl:text-2xl bg-gray-400 hover:bg-gray-600 rounded cursor-pointer"
                            onClick={() =>
                              dispatch(decrementInCart(product.id))
                            }
                          >
                            -
                          </button>
                          <div className="text-lg xl:text-xl bg-gray-300 w-[50px]">
                            {product.quantity}
                          </div>
                          <button
                            className=" w-[50px] text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer hover:bg-gray-600"
                            onClick={() =>
                              dispatch(incrementInCart(product.id))
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="col-span-3 flex items-center pr-4 ml-8  justify-center">
                          <div className="text-lg xl:text-xl bg-gray-200  rounded">
                            <span className="text-xl ">Quantity</span>{" "}
                            {product.quantity}
                          </div>
                        </div>
                        <hr className="my-4 border-t-1 border-gray-400"/>
                        
                        {/* <div className="col-span-3 flex items-center pr-4 justify-end">
                          <div className="text-lg xl:text-xl bg-gray-200 p-2 rounded">
                            <span className="text-xl ">Quantity</span>{" "}
                            {product.quantity}
                          </div>
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="col-span-2">
                      <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                      <span>price=</span>  {GB_CURRENCY.format(product.price)}
                      </div>
                    </div> */}
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
          <div className="col-span-2 bg-white h-[250px] p-7 sticky top-[60px] -mt-8 rounded">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4  ">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
            <div className=" top-5">
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
