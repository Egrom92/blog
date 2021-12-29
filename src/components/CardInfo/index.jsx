import React from "react";
import {Eye} from '../../svg'

const CardInfo = (props) => {
  const {} = props;

  const {className} = props
  const classes = 'CardInfo ' + (className || '');

  return (
    <div className={classes}>
      <span className='CardInfo__category'>
        Название категории
      </span>
      <span className="CardInfo__createAt">
        мрт 23, 2021
      </span>
      <div className="Card__views">
        <img src={Eye} alt="" className="Card__viewsIco"/>
        <span className="Card__viewsCount">
          152
        </span>
      </div>
    </div>
  );

};

export default CardInfo;