import React, { useReducer } from 'react';

const iniState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
    case 'Reset':
      return iniState;
    default:
      state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, iniState);
  return (
    <>
      <p>Counter : {count}</p>
      <button onClick={() => dispatch('Increment')}>Increment</button>
      <button onClick={() => dispatch('Decrement')}>Decrement</button>
      <button onClick={() => dispatch('Reset')}>Reset</button>
    </>
  );
}

export default Counter;
