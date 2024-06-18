import React from "react";
import { PiBag } from "react-icons/pi";

const CartIcon = ({ totalItems }) => {
  return (
    <div>
      <PiBag />
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
};

export default CartIcon;
