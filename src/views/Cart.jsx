import { useContext, useState } from "react";
import { PizzaContext } from "../contexts/PizzaContext";

const Cart = () => {
  const { pizzas } = useContext(PizzaContext);
  const [total, setTotal] = useState(0); 
  const selectedPizzas = pizzas.filter((pizza) => pizza.selected);

  const suma = (id) => {
    setTotal(prevState => ({
      ...prevState,
      [id]: (prevState[id] || 1) + 1 
    }));
  };

  const resta = (id) => {
    if (total[id] > 0) {
      setTotal(prev => ({
        ...prev,
        [id]: prev[id] - 1 
      }));
    }
  };

  const getTotalPrice = (pizza) => {
    return pizza.price * (total[pizza.id] || 1); 
  };

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>
      {selectedPizzas.map((pizza) => (
        <div key={pizza.id} className="cardCart">
          <div className="selected">
            <img src={pizza.img} alt="" width="100px" height="100px" />
            <h1>{pizza.name}</h1>
          </div>
          <div className="buttonSelected">
            <p>$ {getTotalPrice(pizza)}</p>
            <button type="button" className="btn btn-danger" onClick={() => resta(pizza.id)}>-</button>
            <p>{total[pizza.id] || 1}</p>
            <button type="button" className="btn btn-primary" onClick={() => suma(pizza.id)}>+</button>
          </div>
        </div>
      ))}
      <div>
        <h2>Total: ${selectedPizzas.reduce((total, pizza) => total + getTotalPrice(pizza), 0)}</h2>
        <button type="button" className="btn btn-success">Ir a Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
