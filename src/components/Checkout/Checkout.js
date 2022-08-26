import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
    addDoc,
    collection,
    Timestamp,
    getDocs,
    query,
    where,
    documentId,
    writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase/index";

const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext);
    const createOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    name: "Francisco Perez",
                    phone: "2346590355",
                    email: "franpe@gmail.com",
                },
                items: cart,
                total: `${total}`,
                date: Timestamp.fromDate(new Date()),
            };

            const ids = cart.map((prod) => prod.id);

            const productsRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), "in", ids))
            );

            const { docs } = productsAddedFromFirestore;

            const outOfStock = [];

            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAdded = cart.find((prod) => prod.id === doc.id);
                const prodQuaantity = productAdded?.quantity;

                if (stockDb >= prodQuaantity) {
                    console.log("puedo comprar este producto");
                    batch.update(doc.ref, { stock: stockDb - prodQuaantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);

                batch.commit();
                console.log(orderAdded.id);
                clearCart();
            } else {
                console.log("hay prod fuera de stock");
            }
        } catch (error) {
            console.log(error);
        } finally {
            console.log("se termino la ejecucion de la funcion createOrder");
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            <h2>Form</h2>
            <button className="Button" onClick={createOrder}>
                Generar orden
            </button>
        </div>
    );
};

export default Checkout;
