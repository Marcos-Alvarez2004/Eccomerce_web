import React from "react";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = ({
  cartItems,
  incrementQuantity,
  decrementQuantity,
  handleCheckout,
}) => {
  return (
    <>
      <h1>Carrito</h1>
      <Cart
        cartItems={cartItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        handleCheckout={handleCheckout}
      />
    </>
  );
};

export default CartPage;
