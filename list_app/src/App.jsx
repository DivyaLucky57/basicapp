import { useState, useEffect } from 'react'
import './App.css'
import TableRedering from "./Table/Tabledisplay.jsx"

// import {users} from "../data"
import { users } from "../src/data.js"

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const items = localStorage.getItem("users");

    if (!items) {
      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );
    }
  }, []);

  return (
    <>
      <TableRedering></TableRedering>


    </>
  )
}

export default App
