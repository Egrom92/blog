import React from "react";
import {Arrow} from '../../svg'

import card_2 from '../../img/cards/card_2.jpg'
import card_3 from '../../img/cards/card_3.jpg'

const PostNavigation = (props) => {
  const {} = props;

  const {className} = props
  const classes = 'PostNavigation ' + (className || '');

  return (
    <a href='#' className={classes}>

      <div className="PostNavigation__direction PostNavigation__direction_prev">
        <div className="PostNavigation__imgWrapper">
          <Arrow className='PostNavigation__Arrow'/>
          <img src={card_3} alt=""/>
        </div>
        <p>Название пердыдущей статьи</p>
      </div>
      <div className="PostNavigation__direction PostNavigation__direction_next">
        <div className="PostNavigation__imgWrapper">
          <Arrow className='PostNavigation__Arrow'/>
          <img src={card_2} alt=""/>
        </div>
        <p>Название следующей статьи</p>
      </div>

    </a>
  );

};

export default PostNavigation;