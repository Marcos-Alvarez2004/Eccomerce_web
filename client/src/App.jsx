// REACT
import React from "react";
// DEPENDENCIAS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ARCHIVOS
import RegisterPage from "./Pages/Register";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Products from "./Pages/Products";
import CreateProduct from "./Pages/CreateProduct";
import MyPublicPRoduct from "./Pages/MyPublicPRoduct";

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
          {/* RUTAS SOBRE PRODUCTOS */}
          <Route path="/products" element={<Products />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/my-public" element={<MyPublicPRoduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
