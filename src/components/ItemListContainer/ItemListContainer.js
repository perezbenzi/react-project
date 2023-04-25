import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
    console.log('init ItemListContainer')

    useEffect(() => {
        setLoading(true);
        // if (params.categoryId) {
        //     getProductsByCategory(params.categoryId)
        //         .then((response) => {
        //             setProducts(response);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         })
        //         .finally(() => {
        //             setLoading(false);
        //         });
        // } else {
        //     getProducts()
        //         .then((response) => {
        //             setProducts(response);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         })
        //         .finally(() => {
        //             setLoading(false);
        //         });
        // }

        const collectionRef = !categoryId
            ? collection(db, "products")
            : query(
                  collection(db, "products"),
                  where("category", "==", categoryId)
              );

        getDocs(collectionRef)
            .then((response) => {
                const products = response.docs.map((doc) => {
                    const values = doc.data();
                    return { id: doc.id, ...values };
                });
                setProducts(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

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
