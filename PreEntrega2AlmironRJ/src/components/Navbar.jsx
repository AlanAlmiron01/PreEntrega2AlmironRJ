import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";  // Importamos el CartWidget
import "./Navbar.css";

const Navbar = () => {
  const cartCount = 3; // Aquí puedes cambiar este valor dinámicamente

  return (
    <header>
      <Link to="/">Inicio</Link>
      <nav>
        <Link to="/category/negro">Negros</Link>
        <Link to="/category/blanco">Blancos</Link>
        <Link to="/category/verde">Verdes</Link>
      </nav>
      <CartWidget cartCount={cartCount} /> {/* Mostramos el CartWidget */}
    </header>
  );
};

export default Navbar;
