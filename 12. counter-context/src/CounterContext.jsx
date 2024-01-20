
import React, { createContext, useReducer, useContext } from 'react';

// Define the initial state
const initialState = {
  count: 0,
};

// Create the context
const CounterContext = createContext();

// Create a reducer function to update the state
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

// Create a custom provider component
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Create a custom hook to use the context
export const useCounter = () => {
  const context = useContext(CounterContext);
  return context;
};
