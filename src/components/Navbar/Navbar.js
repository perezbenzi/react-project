import "./Navbar.css";
import Button from "../Button/Button";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div>Dr. Álvarez</div>
      <div>
        <Button label="Inicio" />
        <Button label="Contacto" />
        <Button label="Nosotros" />
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
