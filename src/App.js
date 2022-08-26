import "./App.css";
import { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { NotificationProvider } from "./notification/Notification";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
    return (
        <div>
            <NotificationProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Navbar />
                        <NotificationProvider />
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route
                                path="/category/:categoryId"
                                element={<ItemListContainer />}
                            />
                            <Route
                                path="/detail/:productId"
                                element={
                                    <ItemDetailContainer /*addItem={addItem}*/
                                    />
                                }
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </BrowserRouter>
                </CartContextProvider>
            </NotificationProvider>
        </div>
    );
}

export default App;
