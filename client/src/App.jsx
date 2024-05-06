// REACT
import React from "react";
// DEPENDENCIAS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ARCHIVOS
import RegisterPage from "./Pages/Register";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Products from "./Pages/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
