import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Counter from "./components/Counter/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
    // const handleOnAdd = (quantity) => {
    //     alert("Se ha agregado " + quantity + " productos al carrito.");
    // };

    return (
        <div>
            <Navbar />
            <div className="itemListContainer">
                <ItemListContainer />
            </div>
            <div className="itemDetailContainer">
                <ItemDetailContainer />
                {/* <Counter stock={6} initial={1} onAdd={handleOnAdd} /> */}
            </div>
        </div>
    );
}

export default App;
