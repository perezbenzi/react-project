import "./Navbar.css";
import Button from "../Button/Button";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div>
        <img src="images/logo-circular.png" className="logo" alt="logo" />
      </div>
      <div className="navbarButtons">
        <Button label="Inicio" />
        <Button label="Contacto" />
        <Button label="Nosotros" />
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
