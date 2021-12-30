import React from "react";


const Checkbox = (props) => {
  const {className, name} = props

  const classes = 'Checkbox ' + (className || '');
  return (
    <label className={classes}>
      <span className="Checkbox__name">{name}</span>
      <input type="checkbox"/>
      <span className="Checkbox__checkmark"></span>
    </label>
  );
};

export default Checkbox;
