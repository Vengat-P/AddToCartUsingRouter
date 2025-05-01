import React, { useState } from 'react';
import ProductsHome from '../Page/ProductsHome';
import CartLists from '../Page/CartLists';
import { Link } from 'react-router-dom';

const Navbar = ({count,setCount}) => {


    return (
        <>
        <div className="navbar bg-blue-600 shadow-sm">
          <div className="flex-1">
            <Link to={"/"} className=" text-xl text-white">E-Shop</Link>
          </div>
          <div>
          <Link to={"/"} className=" text-xl text-white">Home</Link>
          </div>
          <div className="flex-none">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn rounded-2xl shadow-none bg-transparent border-0"
            >
                <Link to={"/cartlists"}>
                <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item bg-red-400 font-bold text-white border-0">
                  {count}
                </span>
              </div>
                </Link>
              
            </button>
          </div>
        </div>
  

      </>
    );
};

export default Navbar;