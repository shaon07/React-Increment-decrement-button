import React, { useReducer } from 'react';

const iniState = {
  value: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { value: state.value + 1 };
    case 'Decrement':
      return { value: state.value - 1 };
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
      <p>Counter : {count.value}</p>
      <button onClick={() => dispatch({ type: 'Increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
    </>
  );
}

export default Counter;
