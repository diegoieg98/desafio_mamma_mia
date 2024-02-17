import Icon from "@mdi/react";
import { mdiPizza } from "@mdi/js";
import { useContext, useState } from "react";
import { PizzaContext } from "../contexts/PizzaContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { pizzas, changeState } = useContext(PizzaContext);
  const navigate = useNavigate();
  const [add, setAdd] = useState([]);

  const goToPizza = (id) => {
    navigate(`/pizza/${id}`);
  };

  return (
    <div>
      <div className="titleHome">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        <hr />
      </div>
      <div className="home">
        {pizzas.map((pizza) => (
          <div className="card" key={pizza.id} value={pizza.id}>
            <img src={pizza.img} alt="" width="200px" height="200px" />
            <h1>{pizza.name}</h1>
            <hr />
            <h4>Ingredientes: </h4>
            <div>
              <p>
                {" "}
                <Icon path={mdiPizza} size={1} color={"red"} />{" "}
                {pizza.ingredients[0]}
              </p>
              <p>
                {" "}
                <Icon path={mdiPizza} size={1} color={"red"} />{" "}
                {pizza.ingredients[1]}
              </p>
              <p>
                {" "}
                <Icon path={mdiPizza} size={1} color={"red"} />{" "}
                {pizza.ingredients[2]}
              </p>
              <p>
                {" "}
                <Icon path={mdiPizza} size={1} color={"red"} />{" "}
                {pizza.ingredients[3]}
              </p>
            </div>
            <hr />
            <h2>$ {pizza.price}</h2>
            <div className="buttons">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => goToPizza(pizza.id)}
                value={pizza.id}
              >
                Ver Mas
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => changeState(pizza.id)}
              >
                Añadir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
