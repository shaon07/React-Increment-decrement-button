import React, { useState } from 'react';

function Li(props) {
  const [show, setSHow] = useState('flex');
  function hideText() {
    return setSHow('none');
  }
  return (
    <>
      <h5 className="list" style={{ display: show }}>
        <span> {props.text}</span>
        <span className="deleteBtn" onClick={hideText}>
          Delete
        </span>
      </h5>
    </>
  );
}

export default Li;
