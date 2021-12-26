import { useDispatch, useSelector } from 'react-redux';
import { mobileMenuToggle } from '../../store/global';

const Burger = () => {
  const dispatch = useDispatch();

  const { mobileMenuOpen } = useSelector((store) => store.global);


  const burgerHandler = () => {
    dispatch(mobileMenuToggle({mobileMenuOpen: !mobileMenuOpen}));
  }

  const classes = '🍔 burger-menu-wrap js-burger' + (mobileMenuOpen && ' menuMobActive')
  return (
    <div onClick={burgerHandler} className={classes}>
      <ul className="burger-menu js-burger">
        <li className="burger-menu__bar"></li>
        <li className="burger-menu__bar"></li>
        <li className="burger-menu__bar"></li>
      </ul>
    </div>
  );
};

export default Burger;
