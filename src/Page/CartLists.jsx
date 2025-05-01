import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartLists = ({
  count,
  setCount,
  product,
  cartItem,
  setCartItem,
  removeFunction,
  removeTotal,
  total,
  setTotal,
}) => {
  //   set state for quantity
  const [quantity, setQuantity] = useState(1);
  //set state for total price per product
  const [totalPrice, setTotalPrice] = useState([]);

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
  //quantity increment function for particular cart
  const increment = (e) => {
    setQuantity((ele) => ele + 1);
    //set total for add cartitem price in total array for every increment
    setTotal(() => {
      return [...total, cartItem.price];
    });
    //this totalprice state fro particular cart total price increment
    setTotalPrice(() => {
      return [...totalPrice, cartItem.price];
    });
  };
  //quantity decrement function for particular cart
  const decrement = (e) => {
    if (quantity > 1) {
      setQuantity((ele) => ele - 1);
      //passing parameter in removeTotal function for removing element from total array
      removeTotal(total);
    }
  };

  return (
    <>
      <div className="card bg-base-100 w-auto h-full justify-center mx-auto shadow-md border-1 border-gray-400 py-2 mt-2">
        <div className="flex justify-center">
          <img
            className="w-36 h-36 "
            //loading images from cartItem
            src={cartItem.image}
            alt={cartItem.title}
          />
        </div>
        <div className="card-body w-auto h-full">
          {/* updating details from cartItem state */}
          <h2 className="card-title w-fit font-bold text-2xl flex justify-center text-blue-600">
            ProductName : <span className="text-black">{cartItem.title}</span>
          </h2>
          <p className="text-2xl font-bold text-gray-500 mt-2 ">
            {" "}
            Cost : {cartItem.price}$
          </p>
          <div className="container flex sm:w-60 md:w-96 justify-between border-1 border-gray-500 py-2 px-2 mx-auto mt-2">
            <h1 className=" sm:text-xl md:text-2xl font-semibold">Quantity</h1>
            <button
              className="w-8 h-8 bg-gray-400 font-bold sm:text-xl md:text-2xl"
              onClick={decrement}
            >
              -
            </button>
            <span className="w-8 h-8 font-bold sm:text-2xl md:text-3xl text-center">
              {quantity}
            </span>
            <button
              className="w-8 h-8 bg-gray-400 font-bold sm:text-2xl md:text-2xl"
              onClick={increment}
            >
              +
            </button>
          </div>
          <p className="text-2xl font-bold text-gray-500 mt-2 text-center">
            <span>Total Amount :{cartItem.price * quantity}</span>
          </p>
          <div className="card-actions justify-center mt-2">
            <button
              className="btn bg-red-500 w-fit text-xl"
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
