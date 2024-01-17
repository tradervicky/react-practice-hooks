import React from 'react'
import { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState()
  const [todos, setTodos] = useState([])
  const handleAdd = ()=>{
    setTodos([...todos, first])
    setfirst("")
  }
  const handleDelete = (index)=>{
    const filteredTodo = todos.filter((todo)=> todo != todos[index])
    setTodos(filteredTodo)
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={first} placeholder='add todo' onChange={(e)=>setfirst(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index)=>
        <li>{todo}<button onClick={()=>handleDelete(index)}>delete</button></li>)}
      </ul>
    </div>
  )
}

export default App