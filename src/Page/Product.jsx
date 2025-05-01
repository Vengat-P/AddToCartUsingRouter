import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({
  info,
  setInfo,
  count,
  setCount,
  cartItems,
  setCartItem,
  total,
  setTotal,
}) => {
  //   console.log(info);
  // set state for click (add and remove buttons)
  const [click, setClick] = useState(true);

  //handle submit function to get added in cart details
  const handleSubmit = (e) => {
    setClick(false);
    //console.log(product);
    //cart list showing products
    // find the current product already in cartItems or not
    const existItem = cartItems.find((item) => item.id === info.id);
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
        return [...cartItems, info];
      });
      setTotal(() => {
        return [...total, info.price];
      });
    }
  };
  //handleRemove function to get remove from cart particular details
  const handleRemove = (e) => {
    setClick(true);
    const filteredProducts = cartItems.filter((item) => {
      if (item.id !== info.id) {
        return true;
      }
    });

    setCartItem(() => {
      return [...filteredProducts];
    });
    const filteredTotal = total.filter((item) => {
      if (item !== info.price) {
        return true;
      }
    });
    setTotal(() => {
      return [...filteredTotal];
    });
    setCount((ele) => ele - 1);
  };

  return (
    <div>
      <div className="card  container bg-base-100 w-fit justify-center mx-auto py-2 shadow-md shadow-gray-400 mt-2">
        <button className="btn w-fit bg-black/50">
          <Link to="/">Back to Home</Link>
        </button>
        <div className="flex justify-center py-2">
          <img
            className="w-36 h-36"
            //loading images from app.jsx
            src={info.image}
            alt={info.title}
          />
        </div>
        <div className="card-body h-full">
          {/* updating details from product state */}
          <h1 className="card-title w-fit text-2xl font-bold text-blue-600 ">
            {info.title}
          </h1>
          <p className=" flex justify-start gap-2 text-2xl font-bold text-gray-500">
            <span className="card-title  w-fit text-2xl font-bold">
              Price :
            </span>
            {info.price}$
          </p>
          <p className=" w-fit text-xl ">
            <span className="card-title w-fit text-2xl font-bold">
              about this product :
            </span>{" "}
            {info.description}
          </p>
          <div className="flex justify-end">
            <p className="flex gap-4">
              <span className="card-title w-fit text-xl font-bold">
                Ratings:{" "}
              </span>
              <span className="card-title w-fit text-xl font-bold text-yellow-600">
                {info.rating.rate}
              </span>
            </p>
            <p className="flex justify-center gap-4">
              <span className="card-title w-fit text-xl font-bold">
                Available Counts:{" "}
              </span>
              <span className="card-title w-fit text-xl font-bold">
                {info.rating.count}
              </span>
            </p>
          </div>
        </div>
        <div className="card-actions justify-center">
          {click ? (
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
  );
};

export default Product;
