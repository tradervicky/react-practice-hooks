import React from 'react'
import { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(true)
  const clickHandler =()=>{
    setfirst(!first)
  }
  return (
    <div>
      <h2>Toggle Practice</h2>
      
      {!first?<h3>This text should be hidden on button clicked!!</h3> : "" }
      <button onClick={clickHandler}>{first ? "Show text" : "Hide Text"}</button>
    </div>
  )
}

export default App