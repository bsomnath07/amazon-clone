import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { callAPI } from "../utils/CallApi";
import { ProductDetails } from "/";
import {GB_CURRENCY } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/cartSlice'

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity,setQuantity]=useState("1")
  const dispatch=useDispatch();
  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };
const addQuantityToProduct = () => {
  setProduct(product.quantity = quantity)
  return product;
}


  useEffect(() => {
    getProduct();
  }, []);
  if (!product?.title) return <h1> Loading Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto">
          <div className="grid grid-cols-10 gap-3">
            <div className="col-span-3 bg-white p-8 rounded m-auto">
              <img src={`${product.image}`} />
            </div>

            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
                         
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">{GB_CURRENCY.format(product.price)}</div>
              <div className="text-base xl:text-lg font-semibold text-right">{GB_CURRENCY.format(product.oldPrice)}</div>
              <div className="text-sm xl:text-base font-semibold text-blue-500 mt-3">Free Returns</div>
              <div className="text-sm xl:text-base font-semibold text-blue-500 mt-1">Free Delivery</div>
              <div className="text-base xl:text-lg font-semibold text-green-700 ">In Stock</div>
              <div className="text-base xl:text-lg">quantity:
              <select onChange={(e) => setQuantity(e.target.value)} className="p-2 bg-white border rounded-md focus:border-indigo-600">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
              </div>
              <div>
              <Link to={"/checkout"}>
              <button onClick={()=> dispatch(addToCart(addQuantityToProduct()))} className="bg-yellow-400 p-3 text-xs xl:text-sm rounded 
              hover:bg-yellow-500 w-auto mt-2">Add To Cart</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
