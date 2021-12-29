// import React, { Component } from 'react';
// class Warning extends Component {
//   render() {
//     return (
//       <div>{this._reactInternals?._debugOwner?.elementType?.name}</div>
//     );
//   }
// }
//
// export default Warning;

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Warning = ({ view }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  console.log(componentRef);

  return (
    <div className="order-details-section" ref={componentRef}>
      <div className="return-an-issue-header">
        <div className="return-an-issue-title"></div>
        {view && (
          <div className="print-items-container">
            <p onClick={handlePrint}>click to print</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Warning;