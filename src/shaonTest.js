import React from 'react';

function ShaonTest() {
  const [num, setNum] = React.useState(0);
  function add() {
    setNum(num + 1);
    alert('Are You Sure to Update it');
  }
  return (
    <>
      <button onClick={add}>Click here {num}</button>
    </>
  );
}

export default ShaonTest;
