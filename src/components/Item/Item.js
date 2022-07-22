import "./Item.css";

const Item = ({ product }) => {
    return (
        <div className="card" key={product.id}>
            <img src={product.img} alt="img" width="256px"></img>
            <div>{product.name}</div>
            <button>Ver detalles</button>
            <div>Stock disponible: {product.stock}</div>
        </div>
    );
};

export default Item;
