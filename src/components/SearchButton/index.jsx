import { Magnifier } from "../../svg";
import {useDispatch, useSelector} from "react-redux";
import { searchModalToggle } from '../../store/search';
import React from "react";

const SearchButton = (props) => {


  // const getName = (name) => {
  //   return name.name;
  // }
  // console.log(getName(SearchButton));



  const {className} = props
  const dispatch = useDispatch();

  const classes = 'SearchButton ' + (className || '');

  return (
    <>
    <div className={classes} onClick={()=>dispatch(searchModalToggle())}>
      <Magnifier className='SearchButton__Magnifier' />
    </div>
    </>
  );
};

export default SearchButton;
