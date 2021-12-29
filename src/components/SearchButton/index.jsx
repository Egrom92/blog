import React, {useRef} from "react";
import {Search} from "../../svg";


const SearchButton = (props) => {
  const {className} = props
  const inputEl = useRef(null);


  const classes = 'SearchButton ' + (className || '');
  return (
    <img className={classes} src={Search} alt=""/>
  );
};

export default SearchButton;
