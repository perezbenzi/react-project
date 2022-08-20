import "./App.css";
import { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

function App() {
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
                        <Route path="/cart" element={<h1>CART</h1>} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </div>
    );
}

export default App;
