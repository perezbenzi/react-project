import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="card" key={product.id}>
            <img src={product.img} alt="img" width="256px"></img>
            <div>{product.name}</div>
            <Link to={`/detail/${product.id}`}>Ver detalles</Link>
            <div>Stock disponible: {product.stock}</div>
        </div>
    );
};

export default Item;
