import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Counter from "./components/Counter/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    // const handleOnAdd = (quantity) => {
    //     alert("Se ha agregado " + quantity + " productos al carrito.");
    // };

    return (
        <div>
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
                        element={<ItemDetailContainer />}
                    />
                    {/* <Counter stock={6} initial={1} onAdd={handleOnAdd} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
