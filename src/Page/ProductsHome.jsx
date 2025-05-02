import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductsHome = ({
  count,
  setCount,
  product,
  cartItems,
  setCartItem,
  info,
  setInfo,
  total,
  setTotal,
}) => {
  // set state for status
  const [status, setStatus] = useState(true);

  //handle submit function to get added in cart details
  const handleSubmit = (e) => {
    setStatus(false);
    //console.log(product);
    //cart list showing products
    // find the current product already in cartItems or not and setTotal for find total price
    const existItem = cartItems.find((item) => item.id === product.id);
    if (existItem) {
      setCartItem(() => {
        return [...cartItems];
      });
      setTotal(() => {
        return [...total];
      });
    } else {
      setCount((ele) => ele + 1);
      setCartItem(() => {
        return [...cartItems, product];
      });
      setTotal(() => {
        return [...total, product.price];
      });
    }
  };
  //handleRemove function to get remove from cart details and also setTotal function for total price function
  const handleRemove = (e) => {
    setStatus(true);
    const filteredProducts = cartItems.filter((item) => {
      if (item.id !== product.id) {
        return true;
      }
    });
    const filteredTotal = total.filter((item) => {
      if (item !== product.price) {
        return true;
      }
    });
    setTotal(() => {
      return [...filteredTotal];
    });
    setCartItem(() => {
      return [...filteredProducts];
    });
    setCount((ele) => ele - 1);
  };
  //navigate link to anotherpage
  const navigate = useNavigate();
  const detailSubmit = (e) => {
    setInfo(() => {
      return product;
    });
    navigate("/product");
    // console.log(product);
  };
  return (
    <>
      <div className="card bg-base-100  sm:w-64 md:w-86 h-full justify-center mx-auto shadow-md shadow-gray-400 mt-2">
        <div className="flex justify-center py-2">
          <img
            className="w-36 h-36"
            //loading images from app.jsx
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="card-body h-full">
          {/* updating details from product state */}
          <h2 className="card-title w-full h-12">{product.title}</h2>
          <button className="w-fit text-blue-600" onClick={detailSubmit}>
            {/* more info link for product details */}
            <Link to={`/product/${product.id}`}>more info</Link>{" "}
          </button>
          <p className="text-xl font-bold text-gray-500">{product.price}$</p>
          <div className="flex">
            <p className="text-xs font-bold ">Ratings</p>
            <span className="font-semibold">{product.rating.rate} ⭐ </span>
          </div>
          <div className="card-actions justify-center">
            {status ? (
              <button
                className="btn btn-primary w-full text-xl "
                onClick={handleSubmit}
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="btn bg-red-500 w-full text-xl "
                onClick={handleRemove}
              >
                Remove From Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsHome;
