import {Logo, Menu, MobileMenu, Burger} from '../../components';

const Header = () => {
  return (
    <>
      <header className="Header-section">
        <div className="container">
          <div className="Header">
            <Logo/>
            <Menu/>
            <Burger/>
          </div>
        </div>
      </header>
      <MobileMenu/>
    </>
  );
};

export default Header;
