import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/Counter/ItemCount";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const handleOnAdd = (quantity) => {
    alert("Se ha agregado " + quantity + " productos al carrito.");
  };

  return (
    <div>
      <Navbar />
      <div className="body">
        {/* <ItemListContainer /> */}
        <Counter stock={6} initial={1} onAdd={handleOnAdd} />
      </div>
    </div>
  );
}

export default App;
