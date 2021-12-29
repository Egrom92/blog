import React from "react";
import CardInfo from "../CardInfo";

console.log(new Date());
const Card = (props) => {
  const { img, big = false } = props;

  const {className} = props
  let classes = 'Card ' + (className || '');


    return (
      <div className={classes}>
        <img src={img} className='Card__img' alt=""/>
        <div className="Card__content">
          <CardInfo/>

          <h3 className="Card__title">
            Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна.
          </h3>
          <p className='Card__description'>
            Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна.
            Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет совсем неразумно пытаться передать содержание; это не гениально.
            Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет .
          </p>
        </div>


      </div>
    );

};

export default Card;
