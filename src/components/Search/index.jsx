import React, {useState} from "react";
import Filter from "../Filter";
import {Сlose, FilterIco} from '../../svg'
import {useDispatch} from "react-redux";
import {searchModalToggle} from "../../store/search";
import Cards from "../Cards";


const Search = (props) => {
  const {className} = props
  const dispatch = useDispatch();

  const [searchInputValue, setSearchInputValue] = useState('')
  const [filterState, setFilterState] = useState(false)

  const classes = 'Search ' + (className || '');

  return (
    <>
      <div className={classes}>
        <div onClick={() => dispatch(searchModalToggle())} className="Search__overflow"></div>
        <div className="Search__modal">
          <div className="Search__inputWrapper">
            <input onChange={e => setSearchInputValue(e.target.value)} value={searchInputValue}
                   className='Search__input' placeholder='Поиск...' type="text" name="" id=""/>
            {searchInputValue &&
            <img onClick={() => setSearchInputValue('')} src={Сlose} alt="" className="Search__remove"/>}
          </div>
          <div className="Search__header">
            <h2 className="Search__title">
              Популярное:
            </h2>
            <FilterIco onClick={() => setFilterState(!filterState)} className="Search__FilterIco"/>
          </div>
          <div className="Search__result">
            <div className="Search__list">
              <Cards count={5} className='Search__Cards' wide={true}/>
            </div>
            <Filter className={"Search__Filter" + (filterState ? ' Search__Filter_open' : '')}/>
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
