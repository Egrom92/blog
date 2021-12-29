import React from "react";
import {LogoSmall} from '../../svg'

const Logo = (props) => {
  const {className} = props

  const classes = 'Logo ' + (className || '');

  return (
    <a href='/' className={classes}>
      <img className='LogoSmall' src={LogoSmall} alt=""/>
    </a>
  );
};

export default Logo;
