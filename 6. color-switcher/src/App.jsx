import React from 'react'
import { useState } from 'react'

const App = () => {
  const [changedColor, setChangedColor] = useState("")
  const colors =["red","blue", "yellow","purple", "black","cyan", "orange", "pink", "gray", "white", "green", ]
  console.log(changedColor)
  return (
    <div style={{backgroundColor:changedColor, height:"100vh", width:"100vw"}}>
      <h2>Color switcher</h2>
      <select name="" id="" onChange={(e)=>setChangedColor(e.target.value)}>
        <option value="">select color</option>
        {colors.map((data, index)=>
        <option key={index} value={data} >{data}</option>)}
      </select>

      <div></div>
    </div>
  )
}

export default App