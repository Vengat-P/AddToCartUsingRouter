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
  setTotal
}) => {
    //   set state for quantity
const [quantity,setQuantity] = useState(1)

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
  //quantity increment function
  const increment = (e)=>{
    setQuantity((ele)=>ele+1)
    setTotal(()=>{
        return [...total,cartItem.price]
    })
  }
  //quantity decrement function
  const decrement = (e)=>{
    if(quantity>1){
        setQuantity((ele)=>ele-1)
        removeTotal(total)
    }
  }
  
  return (
    <>
      <div className="card bg-base-100 w-auto h-full justify-center mx-auto shadow-sm mt-2">
        <div className="flex justify-center">
          <img
            className="w-36 h-36"
            //loading images from cartItem
            src={cartItem.image}
            alt={cartItem.title}
          />
        </div>
        <div className="card-body h-full">
          {/* updating details from cartItem state */}
          <h2 className="card-title w-fit font-bold text-2xl">{cartItem.title}</h2>
          <p className="text-2xl font-bold text-gray-500 mt-2"> {cartItem.price}$</p>
          <div className="container flex sm:w-60 md:w-96 justify-between border-1 border-gray-500 py-2 px-2 mx-auto mt-2">
            <h1 className=" sm:text-xl md:text-2xl font-semibold">Quantity</h1>
            <button className="w-8 h-8 bg-gray-400 font-bold sm:text-xl md:text-2xl" onClick={decrement}>-</button>
            <span className="w-8 h-8 font-bold sm:text-2xl md:text-3xl text-center">{quantity}</span>
            <button className="w-8 h-8 bg-gray-400 font-bold sm:text-2xl md:text-2xl" onClick={increment}>+</button>
          </div>
          <p className="text-2xl font-bold text-gray-500 mt-2 text-center"><span>Total Amount :</span>
          
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
