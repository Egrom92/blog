import React from "react";

const Close = (props) => {
    const {className} = props

    const classes = 'Close ' + (className || '');

    return (
      <svg className={classes} width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L20.2929 20.2929" stroke="#3AA8B5" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20.293 1L1.00005 20.2929" stroke="#3AA8B5" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );

};

export default Close;