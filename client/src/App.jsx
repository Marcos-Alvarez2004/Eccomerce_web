// REACT
import React, { useState } from "react";
// DEPENDENCIAS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ARCHIVOS
import RegisterPage from "./Pages/Register";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import CreateProduct from "./Pages/CreateProduct";
import MyProducts from "./Pages/MyProducts";
import Product from "./Pages/Products";
import Favorites from "./Pages/Favorites";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* INICIO */}
          <Route path="/" element={<HomePage />} />
          {/* REGISTRO Y INGRESO */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* PRODUCTOS */}
          <Route path="/products" element={<Product />} />
          {/* PRODUCTOS DE USER */}
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/my-products" element={<MyProducts />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
