// REACT
import React, { useState, useEffect } from "react";
// DEPENDENCIAS
import { Routes, Route, useNavigate } from "react-router-dom";
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
import ProductSelected from "./Pages/ProductSelected";
import { jsonProducts } from "./Pages/Products";
import CartPage from "./Pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SuccessPage from "./Pages/SuccessPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const navigate = useNavigate();

  const addToCart = (prouduct) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === prouduct.id);
      if (existingProduct) {
        alert("El producto ya está en el carrito");
        return prevItems;
      } else {
        return [...prevItems, { ...prouduct, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  }, [cartItems]);

  const handleCheckout = () => {
    setCartItems([]);
    navigate("/success");
  };

  return (
    <div>
      <Navbar totalItems={totalItems} />
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
        <Route
          path="/contact"
          element={<ContactPage />}
          totalItems={totalItems}
        />
        {/* PRODUCTOS */}
        <Route
          path="/products"
          element={<Product addToCart={addToCart} totalItems={totalItems} />}
        />
        <Route
          path="/products/:id"
          element={<ProductSelected products={jsonProducts} />}
        />
        {/* CARRITO */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              handleCheckout={handleCheckout}
            />
          }
        />
        {/* PRODUCTOS DE USER */}
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/my-products" element={<MyProducts />} />
        {/* SUCCESS */}
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
