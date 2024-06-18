import React from "react";
import Cart from "../components/Cart";

const CartPage = ({
  cartItems,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  handleCheckout,
}) => {
  return (
    <>
      <h1>Carrito</h1>
      <Cart
        cartItems={cartItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />
    </>
  );
};

export default CartPage;
