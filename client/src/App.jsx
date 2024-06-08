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
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

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
          {/**  PAGES **/}
          {/* ACERCA DE */}
          <Route path="/about" element={<AboutPage />} />
          {/* CONTACTO */}
          <Route path="/contact" element={<ContactPage />} />
          {/* PRODUCTOS */}
          <Route path="/products" element={<Product />} />
          {/* PRODUCTOS DE USER */}
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/my-products" element={<MyProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
