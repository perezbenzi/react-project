import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
// import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const ItemDetailContainer = ({ addItem }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        getDoc(doc(db, "products", productId))
            .then((response) => {
                console.log(response);
                const values = response.data();

                const product = { id: response.id, ...values };
                setProduct(product);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        // getProductById(params.productId).then((response) => {
        //     setProduct(response);
        // });
    }, [productId]);

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} addItem={addItem} />
        </div>
    );
};

export default ItemDetailContainer;
