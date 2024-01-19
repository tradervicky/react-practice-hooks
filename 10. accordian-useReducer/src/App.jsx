// App.js
import React, { useReducer } from 'react';
import data from './data';
import { reducer } from './reducer';

const initialState = {
  sections: data,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.sections.map((section) => (
        <div key={section.id}>
          <h3 onClick={() => dispatch({ type: 'TOGGLE', payload: section.id })}>
            {section.title}
          </h3>
          {section.isOpen && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default App;
