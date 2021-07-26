import React, { useState } from 'react';
import './style.css';

function Test() {
  const [num, setNum] = useState(0);
  const inc = () => {
    setNum(num + 1);
  };
  const dec = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  };
  return (
    <>
      <div className="mainDiv">
        <div className="InnerDiv">
          <h1>{num}</h1>
          <div className="btnDiv">
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Test;
