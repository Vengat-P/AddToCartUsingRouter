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
  const [info , setInfo] = useState([])
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
  //callback function passing parameter from cartlist child component to filter and show remaining products
  const removeFunction = (cartItem) => {
    const removeId = cartItem.id;
    const filteredProducts = cartItems.filter((item) => {
      if (item.id !== removeId) {
        return true;
      }
    });
    setCartItem(() => {
      return [...filteredProducts];
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
                          setInfo = {setInfo}
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
          <Route path="/product" element={<Product count={count}
                          setCount={setCount}
                          cartItems={cartItems}
                          setCartItem={setCartItem}
                          info={info}
                          setInfo = {setInfo}/>} 
                          />
          <Route
            path="/cartlists"
            element={
              <div>
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
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="flex justify-center items-center">
                    <h1 className="font-bold text-lg"> Your Cart Is Empty </h1>
                  </div>
                )}
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
