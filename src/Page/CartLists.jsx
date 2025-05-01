import React from "react";
import { Link } from "react-router-dom";

const CartLists = ({
  count,
  setCount,
  product,
  cartItem,
  setCartItem,
  removeFunction,
}) => {
  //remove button function
  const removeFromCart = (e) => {
    // console.log(cartItem);
    // this will return selected cart item
    if (count > 0) {
      setCount((ele) => ele - 1);
    }
    //pass this cartItem as a parameter to parent component
    removeFunction(cartItem);
  };
  return (
    <>
      <div className="card bg-base-100 w-86 h-full justify-center mx-auto shadow-sm mt-2">
        <div className="flex justify-center">
          <img
            className="w-36 h-36"
            //loading images from cartItem
            src={cartItem.image}
            alt={cartItem.id}
          />
        </div>
        <div className="card-body h-full">
          {/* updating details from cartItem state */}
          <h2 className="card-title w-fit">{cartItem.title}</h2>
          <p className="text-xl font-bold text-gray-500"> {cartItem.price}$</p>
          <div className="card-actions justify-center">
            <button
              className="btn bg-red-500 w-full text-xl"
              onClick={removeFromCart}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartLists;
