
import React from 'react';
import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';
import DisplayPractice from './components/DisplayPractice';
import ButtonPractice from './components/ButtonPractice';
import { PracticeProvider } from './components/ContextPractice';


const App = () => {
  return (
    <PracticeProvider>
      <div>
        <CounterDisplay />
        <CounterButtons />
        
        <h2>HERE IS ANOTHER LOGIC</h2>
        {/* <DisplayPractice/> */}
        <ButtonPractice/>
              </div>
      
              </PracticeProvider>
  );
};

export default App;
