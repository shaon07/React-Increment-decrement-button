import React, { useState } from 'react';

function Li(props) {
  const [show, setSHow] = useState('block');
  function hideText() {
    return setSHow('none');
  }
  return (
    <>
      <ol style={{ width: '100%' }}>
        <li className="list" style={{ display: show }}>
          {props.text}
          <span className="deleteBtn" onClick={hideText}>
            Delete
          </span>
        </li>
      </ol>
    </>
  );
}

export default Li;
