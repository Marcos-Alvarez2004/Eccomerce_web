import React from "react";

const Cart = ({
  cartItems,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  handleCheckout,
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Carrito vacio</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} USD (Cantidad : {item.quantity}) -
                Precio Final: {(item.price * item.quantity).toFixed(2)} USD
                <div>
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    disabled={item.quantity >= 10}
                  >
                    +
                  </button>
                  <button onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Precio Final Total: {totalPrice.toFixed(2)} USD</h2>
          <button onClick={handleCheckout}>Comprar Todo</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
