import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Li from './Li';

function Todo() {
  return (
    <>
      <div className="mainDiv">
        <div className="inner">
          <h2>Your Todo's</h2>
          <div className="box">
            <input type="text" placeholder="Enter your Todo's" />
            <AddBoxIcon className="addBtn" />
          </div>
          <div className="items">
            <ul className="Ul">
              <Li />
              <Li />
              <Li />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todo;
