import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState("")
  return (
    <div>
      <input type="text" onChange={(e)=>setfirst(e.target.value)} />
      <h3>{first}</h3>
      </div>
  )
}

export default App