import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsHome from "./Page/ProductsHome";
import Product from "./Page/Product";
import PageNotFound from "./Page/PageNotFound";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CartLists from "./Page/CartLists";

const App = () => {
  // set state for store data from api
  const [products, setProducts] = useState([]);
  //set state for count to counts added items
  const [count, setCount] = useState(0);
  //set state fro cart items to store added and removed items
  const [cartItems, setCartItem] = useState([]);
  //set state for product page
  const [info, setInfo] = useState([]);
  //set state for total amount
  const [total, setTotal] = useState([]);
  // use effect for fetch data from api
  useEffect(() => {
    fetchData();
  }, []);
  // fetching data from api
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      //storing the geting values in product state
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(cartItems);
  // console.log(total);

  //callback function passing parameter from cartlist child component to filter and show remaining products
  const removeFunction = (cartItem) => {
    const removeId = cartItem.id;
    const filteredProducts = cartItems.filter((item) => {
      if (item.id !== removeId) {
        return true;
      }
    });
    const filteredTotal = total.filter((item) => {
      if (item !== cartItem.price) {
        return true;
      }
    });
    setTotal(() => {
      return [...filteredTotal];
    });
    setCartItem(() => {
      return [...filteredProducts];
    });
  };
  //callback function ro remove total element from quantity decrement
  const removeTotal = (total) => {
    // console.log(total);
    total.splice(total.length - 1, 1);
    setTotal(() => {
      return [...total];
    });
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar count={count} setCount={setCount} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-300 py-4 ">
                {products.length > 0 ? (
                  products.map((product, index) => {
                    return (
                      <div key={index}>
                        <ProductsHome
                          product={product}
                          count={count}
                          setCount={setCount}
                          cartItems={cartItems}
                          setCartItem={setCartItem}
                          info={info}
                          setInfo={setInfo}
                          total={total}
                          setTotal={setTotal}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div>data not found</div>
                )}
              </div>
            }
          />
          <Route
            path="/product"
            element={
              <Product
                count={count}
                setCount={setCount}
                cartItems={cartItems}
                setCartItem={setCartItem}
                info={info}
                setInfo={setInfo}
                total={total}
                setTotal={setTotal}
              />
            }
          />
          <Route
            path="/cartlists"
            element={
              <div className="container mx-auto grid border-1 border-gray-500 mt-2">
                <h1 className="text-center sm:text-xl md:text-3xl">You have in your cart <span className="text-red-600">{count}</span> Items</h1>
                {/* display the added cart list products */}
                {cartItems.length > 0 ? (
                  cartItems.map((cartItem, index) => {
                    return (
                      <div key={index}>
                        <CartLists
                          count={count}
                          setCount={setCount}
                          cartItem={cartItem}
                          setCartItem={setCartItem}
                          removeFunction={removeFunction}
                          removeTotal={removeTotal}
                          total={total}
                          setTotal={setTotal}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="flex justify-center items-center">
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
                      alt="cart empty"
                      className="mt-2"
                    />
                  </div>
                )}
                <div className="felx justify-center gap-2 text-center mx-auto py-2 mt-4 ">
                  <p className="text-2xl font-semibold uppercase flex justify-center gap-4 text-blue-600">
                    Total Amount of <span className="text-red-600 capitalize">({count} items)</span> :
                    <span className="text-2xl font-bold text-black">
                      {total.reduce((sum, value) => {
                        return sum + value;
                      }, 0)}
                    </span>
                  </p>
                </div>
                <div className="container w-auto flex justify-center items-center">
                  <p className=" text-center text-xl w-fit font-bold text-black capitalize">
                    You Have 10% discount of Total Amount
                  </p>
                </div>

                <div className="felx justify-center gap-2 text-center mx-auto py-2 mt-4 ">
                  <p className=" sm:text-xs md:text-2xl font-semibold uppercase flex justify-center gap-2 text-blue-600">
                    Final Payable Amount:
                    <span className="sm:text-xs md:text-2xl font-bold text-black">
                      {total.reduce((sum, value) => {
                        return sum + value;
                      }, 0) -
                        (10 / 100) *
                          total.reduce((sum, value) => {
                            return sum + value;
                          }, 0)}
                    </span>
                  </p>
                </div>
              </div>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
