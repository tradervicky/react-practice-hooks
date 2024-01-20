
import React from 'react';
import { useCounter } from './CounterContext';

const CounterDisplay = () => {
  const { state } = useCounter();

  return (
    <div>
      <h1>Counter: {state.count}</h1>
    </div>
  );
};

export default CounterDisplay;
