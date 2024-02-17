import { useEffect, useState, createContext } from "react";

export const PizzaContext = createContext();

const PizzaContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const obtenerPizza = async () => {
    try {
      const pizzaUrl = '/src/assets/json/pizzas.json';
      const res = await fetch(pizzaUrl);
      if(!res.ok){
        throw new Error('Error al obtener los datos')
      }
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      alert( error );
    }
  };

  useEffect(() => {
    obtenerPizza();
  }, []);

  const changeState = (id) => {
    const addPizzas = pizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, selected: !pizza.selected };
      }
      return pizza;
    });
    setPizzas(addPizzas);
    console.log(addPizzas);
  }

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, changeState }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;
