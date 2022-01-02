import React from "react";
import Checkbox from "../Checkbox";


const Filter = (props) => {
  const {className} = props

  const classes = 'Filter ' + (className || '');
  return (
    <>
      <div className={classes}>
        <div className="Filter__category">
          <ul className="Filter__params">
            <li className="Filter__param">
              <Checkbox className='Filter__Checkbox' name='JavaScript'/>
              <span className='Filter__paramCount'>(340)</span>
            </li>
            <li className="Filter__param">
              <Checkbox className='Filter__Checkbox' name='PHP'/>
              <span className='Filter__paramCount'>(340)</span>
            </li>
            <li className="Filter__param">
              <Checkbox className='Filter__Checkbox' name='HTML'/>
              <span className='Filter__paramCount'>(340)</span>
            </li>
            <li className="Filter__param">
              <Checkbox className='Filter__Checkbox' name='Инструменты'/>
              <span className='Filter__paramCount'>(340)</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
