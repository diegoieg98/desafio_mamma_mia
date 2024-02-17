import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../contexts/PizzaContext";
import Icon from "@mdi/react";
import { mdiPizza } from "@mdi/js";

const Pizza = () => {
  const { pizzas, changeState } = useContext(PizzaContext);
  const { id } = useParams();

  const pizza = pizzas.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <h1>No se encontró la pizza con el ID {id}</h1>;
  }

  return (
    <div className="pizza">
      <div className="cardOfPizza">
        <img src={pizza.img} alt="" width='500px' height='500px' />
        <div className="data">
          <h1>{pizza.name}</h1>
          <hr />
          <p>{pizza.desc}</p>
          <div className="ingredients">
            <h3>Ingredientes:</h3>
            <p> {" "} <Icon path={mdiPizza} size={1} color={"red"} />{" "} {pizza.ingredients[0]} </p>
            <p> {" "} <Icon path={mdiPizza} size={1} color={"red"} />{" "} {pizza.ingredients[1]} </p>          <p> {" "} <Icon path={mdiPizza} size={1} color={"red"} />{" "} {pizza.ingredients[2]} </p>
            <p>{" "} <Icon path={mdiPizza} size={1} color={"red"} />{" "} {pizza.ingredients[3]} </p>
          </div>
          <div className="button">
            <h1>Precio: ${pizza.price}</h1>
            <button type="button" className="btn btn-danger" onClick={() => changeState (pizza.id)} >Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
