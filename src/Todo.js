import React, { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Li from './Li';

function Todo() {
  const [name, setName] = useState();
  const [finalName, setFinalName] = useState([]);
  function addItems(e) {
    setName(e.target.value);
  }
  function final() {
    finalName.unshift(name);
    setName('');
    console.log(finalName);
  }
  let todos = finalName.map((file, index) => {
    return <Li text={file} key={index} />;
  });
  return (
    <>
      <div className="mainDiv">
        <div className="inner">
          <h2>Your Todo's</h2>
          <div className="box">
            <input
              type="text"
              placeholder="Enter your Todo's"
              onChange={addItems}
              value={name}
            />
            <AddBoxIcon className="addBtn" onClick={final} />
            <div className="items">
              <div className="Ul">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todo;
