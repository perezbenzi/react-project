import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const params = useParams();
    console.log(params);
    useEffect(() => {
        getProductById(params.productId).then((response) => {
            setProduct(response);
        });
    });

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;