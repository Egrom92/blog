import React from "react";
import {Card} from "../index";

import card_1 from '../../img/cards/card_1.jpg'


const Cards = (props) => {
  const {className, count, big = false, wide = false} = props

  let classes = 'Cards ' + (className || '');

  if (big) {classes += ' big'}
  if (wide) {classes += ' wide'}

  const cards = []
  for (let i = 0; i < count; i++) {
    cards.push(<Card img={card_1} url={'/post/post-' + i + 1} className='Cards__Card'/>)
  }

  return (
    <div className={classes}>
      {cards}
    </div>
  );

};

export default Cards;