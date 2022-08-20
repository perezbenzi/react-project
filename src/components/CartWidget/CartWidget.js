import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);

    const quantity = getQuantity();

    return (
        <Link to="/cart">
            <img src="images/cart.png" className="CartWidget" alt="cart" />
            {quantity}
        </Link>
    );
};

export default CartWidget;
