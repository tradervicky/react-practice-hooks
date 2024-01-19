import React, { useReducer } from 'react'
import { reducer } from './reducers'
const initialState = {count : 0}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
  return (
    <div>
    
    <h1>Counter : {state.count}</h1>
    <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
  </div>
  )
}

export default Counter