import React, { useState } from 'react';

function Lists() {
  const [show, setShow] = useState();
  function myfun() {
    setShow('none');
  }
  return (
    <>
      <div className="inner" style={{ display: show }}>
        <h4>Hello world</h4>
        <button onClick={myfun}>Delete</button>
      </div>
    </>
  );
}

function Shaon() {
  return (
    <>
      <div className="mainDiv">
        <Lists />
        <Lists />
      </div>
    </>
  );
}
export default Shaon;
