import Icon from "@mdi/react";
import { mdiPizza, mdiCartVariant } from "@mdi/js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Icon path={mdiPizza} size={1} />
        <NavLink className="link" to="/">
          Pizzeria Mamma Mia!
        </NavLink>
      </div>
      <div>
        <NavLink className='link' to='/carrito' >
          <Icon path={mdiCartVariant} size={1} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
