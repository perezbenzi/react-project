import "./App.css";
import { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
// import Counter from "./components/Counter/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

function App() {
    // const handleOnAdd = (quantity) => {
    //     alert("Se ha agregado " + quantity + " productos al carrito.");
    // };

    return (
        <div>
            <CartContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:categoryId"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/detail/:productId"
                            element={
                                <ItemDetailContainer /*addItem={addItem}*/ />
                            }
                        />
                        {/* <Counter stock={6} initial={1} onAdd={handleOnAdd} /> */}
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </div>
    );
}

export default App;
