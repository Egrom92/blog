import {Logo, SearchButton, MobileMenu, Burger, Warning} from '../../components';
import React from "react";

const Header = () => {
  console.log(Header.name);
  return (
    <>
      <header className="Header-section">
        <div className="container">
          <div className="Header">
            <Logo className='Header__Logo'/>
            <SearchButton className='Header__SearchButton'/>
          </div>
        </div>
      </header>
      <MobileMenu/>
    </>
  );
};

export default Header;
