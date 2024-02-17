import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Cart from "./views/Cart";
import PizzaContextProvider from "./contexts/PizzaContext";

function App() {
  return (
    <div>
      <Navbar />
      <PizzaContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza/>}/>
          <Route path="/carrito" element={<Cart/>} />
        </Routes>
      </PizzaContextProvider>
    </div>
  );
}

export default App;
