import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting, setShow, show }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        if (params.categoryId) {
            getProductsByCategory(params.categoryId)
                .then((response) => {
                    setProducts(response);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            getProducts()
                .then((response) => {
                    setProducts(response);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [params.categoryId]);

    if (loading) {
        return <h1>Cargando productos...</h1>;
    }

    return (
        <>
            <div className="itemListContainer">
                <h1>{greeting}</h1>
                <ItemList products={products} />
            </div>
        </>
    );
};

export default ItemListContainer;
