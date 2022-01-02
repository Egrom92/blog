import React from "react";

const Arrow = (props) => {
    const {className} = props
    const classes = 'Arrow ' + (className || '');

    return (
      <svg className={classes} width="12" height="20" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0004 20C9.70396 20 9.40697 19.8879 9.181 19.6613L0.339396 10.8186C-0.113132 10.366 -0.113132 9.63353 0.339396 9.181L9.181 0.339396C9.63353 -0.113132 10.3666 -0.113132 10.8191 0.339396C11.2717 0.791924 11.2717 1.52501 10.8191 1.97695L2.79572 9.99978L10.8191 18.0226C11.2717 18.4751 11.2717 19.2088 10.8191 19.6613C10.5932 19.8873 10.2968 20 10.0004 20Z"/>
      </svg>
    );

};

export default Arrow;

