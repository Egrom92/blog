import React from "react";
import PostInfo from "../PostInfo";

const Card = (props) => {
  const { img} = props;

  const {className} = props
  let classes = 'Card ' + (className || '');


    return (
      <div className={classes}>
        <img src={img} className='Card__img' alt=""/>
        <div className="Card__content">
          <PostInfo/>

          <h3 className="Card__title">
            Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна.
          </h3>
          <p className='Card__description Card__description_big'>
            Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна.
            Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет совсем неразумно пытаться передать содержание; это не гениально.
          </p>
          <p className='Card__description Card__description_wide'>
            Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна.
          </p>
        </div>


      </div>
    );

};

export default Card;
