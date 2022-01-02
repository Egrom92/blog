import React, {useState} from "react";
import Card from "../Card";
import Filter from "../Filter";
import {Сlose} from '../../svg'
import {useDispatch} from "react-redux";

import card_1 from '../../img/cards/card_1.jpg'
import card_2 from '../../img/cards/card_2.jpg'
import card_3 from '../../img/cards/card_3.jpg'
import {searchModalToggle} from "../../store/search";


const Search = (props) => {
  const {className} = props
  const dispatch = useDispatch();

  const [searchInputValue, setSearchInputValue] = useState('')

  const classes = 'Search ' + (className || '');
  return (
    <>
      <div className={classes}>
        <div onClick={()=>dispatch(searchModalToggle())} className="Search__overflow"></div>
        <div className="Search__modal">
          <div className="Search__inputWrapper">
            <input onChange={e => setSearchInputValue(e.target.value)} value={searchInputValue} className='Search__input' placeholder='Поиск...' type="text" name="" id=""/>
            {searchInputValue && <img onClick={() => setSearchInputValue('')} src={Сlose} alt="" className="Search__remove"/>}
          </div>
          <h2 className="Search__title">
            Популярное:
          </h2>
          <div className="Search__result">
            <ul className="Search__list">
              <li className="Search__item wide">
                <Card img={card_1}/>
              </li>
              <li className="Search__item wide">
                <Card img={card_2}/>
              </li>
              <li className="Search__item wide">
                <Card img={card_3}/>
              </li>
              <li className="Search__item wide">
                <Card img={card_1}/>
              </li>
            </ul>
            <Filter className="Search__Filter"/>
          </div>
          <button className="Search__more">
            Ещё...
          </button>
        </div>

      </div>
    </>
  );
};

export default Search;
