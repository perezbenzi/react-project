import "./ItemDetail.css";
// import ItemCount from "../ItemCount/ItemCount";
// import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

const InputCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const handleChange = (e) => {
        if (e.target.value <= stock) {
            setCount(e.target.value);
        }
    };

    return (
        <div>
            <input type="number" onChange={handleChange} value={count} />
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    );
};

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    );
};

const ItemDetail = ({
    id,
    name,
    category,
    img,
    price,
    stock,
    description,
    addItem,
}) => {
    const [inputType] = useState("input");

    const [quantity, setQuantity] = useState(0);

    const ItemCount = inputType === "input" ? InputCount : ButtonCount;

    const handleOnAdd = (quantity) => {
        console.log("agregue al carrito: ", quantity, name);
        setQuantity(quantity);
        addItem({ id, name, price, quantity });
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoria: {category}</p>
                <p className="Info">Descripción: {description}</p>
                <p className="Info">Precio: {price}</p>
            </section>
            <footer className="ItemFooter">
                {/* <ItemCount stock={stock} onAdd={handleOnAdd} /> */}
                {/* {inputType === "buton" ? (
                    <ButtonCount stock={stock} onConfirm={handleOnAdd} />
                ) : null}
                {inputType === "input" ? (
                    <InputCount stock={stock} onConfirm={handleOnAdd} />
                ) : null} */}
                {quantity > 0 ? (
                    <Link to="/cart">Ir al carrito</Link>
                ) : (
                    <ItemCount stock={stock} onConfirm={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;
