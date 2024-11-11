import React from "react";
import { Link } from "react-router-dom";

const CartWidget = ({ cartCount }) => {
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <span>Carrito</span>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;
