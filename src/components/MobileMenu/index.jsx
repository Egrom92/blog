import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = () => {
  const menu = [];

  if (!menu) return null;

  return (
    <div className="MobileMenu" >
      <div className="container">
        <nav className="MobileMenu__wrapper">
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

      </div>
    </div>
  );
};

export default MobileMenu;
