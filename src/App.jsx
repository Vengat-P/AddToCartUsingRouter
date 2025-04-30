import React, { useState ,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsHome from './Page/ProductsHome';
import Product from './Page/Product';
import PageNotFound from './Page/PageNotFound';
import axios from "axios";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CartLists from './Page/CartLists';

const App = () => {

  return (
    <>

      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<ProductsHome />}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/cartlists' element={<CartLists />}/>
        <Route path='*' element={ <PageNotFound />}/>
      </Routes>
      <div>
        <Footer/>
      </div>
      </BrowserRouter>

    </>
  );
};

export default App;