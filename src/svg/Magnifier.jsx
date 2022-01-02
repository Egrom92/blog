import React from "react";

const Magnifier = (props) => {
    const {className} = props

    const classes = 'Magnifier ' + (className || '');

    return (
      <svg className={classes} width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d="M15.3125 26.25C21.3531 26.25 26.25 21.3531 26.25 15.3125C26.25 9.27189 21.3531 4.375 15.3125 4.375C9.27189 4.375 4.375 9.27189 4.375 15.3125C4.375 21.3531 9.27189 26.25 15.3125 26.25Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30.6251 30.625L23.0417 23.0416" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    );

};

export default Magnifier;