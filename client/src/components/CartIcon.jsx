import React from "react";
import { PiBag } from "react-icons/pi";

const CartIcon = ({ totalItems }) => {
  return (
    <div>
      <i className="bx bx-shopping-bag"></i>
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
};

export default CartIcon;
