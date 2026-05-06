import { useState } from 'react'
import './App.css'
import TableRedering from "./Table/Tabledisplay.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TableRedering></TableRedering>
    
     
    </>
  )
}

export default App
