import React from "react";
import PostInfo from "../PostInfo";
import {NavLink} from "react-router-dom";

const Card = (props) => {
  const {img} = props;

  const {className} = props
  let classes = 'Card ' + (className || '');


  return (
    <NavLink
      to={'/post/post-1'}
      exact="true"
      className={classes}
    >

      <img src={img} className='Card__img' alt=""/>
      <div className="Card__content">
        <PostInfo className='Card__PostInfo'/>

        <h3 className="Card__title">
          Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна.
        </h3>
        <p className='Card__description'>
          Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна.
        </p>
      </div>


    </NavLink>
  );

};

export default Card;
