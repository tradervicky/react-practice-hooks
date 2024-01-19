import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState("")
 
  
  const handleType = (e)=>{
    setfirst(e.target.value)
    if(first!==""){
    
    }
  }
  return (
    <div>
      <h3>Word Counter</h3>
      <label htmlFor="">write something word will be counted</label>
      <textarea onChange={handleType}/>
      <h3>{first}</h3>
      <h3>Word Counted</h3>
      <h3>{first.length}</h3>
    </div>
  )
}

export default App