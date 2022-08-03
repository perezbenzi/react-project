import "./Navbar.css";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <Link to="/">
                <img
                    src="images/logo-circular.png"
                    className="logo"
                    alt="logo"
                />
            </Link>
            <div className="navbarButtons">
                <Link to="/category/ventanas" label="Ventanas">
                    Ventanas
                </Link>
                <Link to="/category/puertas" label="Puertas">
                    Puertas
                </Link>
                <Link to="/category/postigos" label="Postigos">
                    Postigos
                </Link>
            </div>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
