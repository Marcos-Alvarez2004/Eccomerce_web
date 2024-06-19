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
import SuccessPage from "./Pages/SuccessPage";
import Layout from "./Layout/Layout";
import Navbar from "./components/Navbar";
import Void from "./Void/Void";

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

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
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

  // FAVORITES  AND CATEGORIES
  const [products, setProducts] = useState(jsonProducts);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );

    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((product) => product.id === id);
      if (isFavorite) {
        return prevFavorites.filter((product) => product.id !== id);
      } else {
        const newFavorite = products.find((product) => product.id === id);
        return [newFavorite, ...prevFavorites];
      }
    });
  };

  // DATA FILTER CATEGORY
  const allCategories = [
    "All",
    ...new Set(jsonProducts.map((e) => e.category)),
  ];
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "All") {
      setProducts(jsonProducts);
      return;
    }

    const dataFiltered = jsonProducts.filter((e) => e.category === category);
    setProducts(dataFiltered);
  };

  return (
    <>
      <Routes>
        {/* Rutas que no muestran Navbar ni Footer */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Void />} />

        {/* Rutas que muestran Navbar y Footer */}
        <Route element={<Layout totalItems={totalItems} />}>
          <Route path="/main" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/products"
            element={
              <Product
                addToCart={addToCart}
                totalItems={totalItems}
                categories={categories}
                filterCategory={filterCategory}
                products={products}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductSelected products={products} />}
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeFromCart={removeFromCart}
                handleCheckout={handleCheckout}
              />
            }
          />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/my-products" element={<MyProducts />} />
          <Route path="/success" element={<SuccessPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
