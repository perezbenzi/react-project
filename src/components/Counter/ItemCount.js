import { useState } from "react";
import "./ItemCount.css";

const Counter = ({ show, stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < 6) {
      setCount(count + 1);
    }
  };

  return (
    <div className="counterDiv">
      <div className="countSpace">
        <p>{count}</p>
      </div>

      <button onClick={decrement} disabled={count === 1 ? true : null}>
        -
      </button>
      <button onClick={increment} disabled={count === stock ? true : null}>
        +
      </button>
      <div>
        <button className="buttonAdd" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
