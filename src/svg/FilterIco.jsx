import React from "react";

const FilterIco = (props) => {
  const {className, onClick} = props

  const classes = 'FilterIco bi bi-filter ' + (className || '');

  return (
    <svg onClick={onClick} className={classes} width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
    </svg>
  );

};

export default FilterIco;