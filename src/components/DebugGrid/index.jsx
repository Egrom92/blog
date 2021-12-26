import parse from "html-react-parser";
import React from "react";

const DebugGrid = (props) => {
  const { COLUMNS = 12, hide = true } = props;


  let colsHtml = "";

  for (let i = 0; i < COLUMNS; i++) {
    colsHtml += "<div></div>";
  }

  if (!hide) {
    return (
      <div className="debugGrid">
        <div>
          <div>{parse(colsHtml)}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DebugGrid;
