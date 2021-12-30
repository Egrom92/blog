import {Logo, SearchButton, MobileMenu } from '../../components';
import React from "react";

const Header = (props) => {

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
