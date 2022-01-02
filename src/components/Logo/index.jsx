import React from "react";
import {LogoSmall} from '../../svg'

const Logo = (props) => {
  const {className} = props

  const classes = 'Logo ' + (className || '');

  return (
    <a href='/' className={classes}>
      <LogoSmall className='LogoSmall'/>
    </a>
  );
};

export default Logo;
