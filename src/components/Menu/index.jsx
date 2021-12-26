import { NavLink } from 'react-router-dom';
import React from "react";

const Menu = () => {
  const menu = [];

  if (!menu) return null;

  return (
    <nav className="menu">
      <ul>
        {menu.map((el) => (
          <li key={el.id}>
            <NavLink exact="true" to={el.value}>
              {el.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
