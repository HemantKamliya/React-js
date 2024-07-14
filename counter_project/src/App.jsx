import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let [name, setName] = useState("");
  const addCount = () => {
    if (counter == 20) {
      setName("Count cannot be more than 20");
    } else {
      setName("")
      setCounter(counter = counter + 1);
    }
  }
  const removeCount = () => {
    if (counter == 0) {
      setName("Count cannot be less than 0");
    }
    else {
      setName("")
      setCounter(counter = counter - 1);
    }
  }
  return (
    <>
      <h1>Hello here is a basic counter</h1>
      <h3>  Current count is : {counter}</h3>
      <br /><br />
      <button onClick={addCount}> Add count</button>
      <br /><br />
      <button onClick={removeCount}> Remove count</button>
      <br />
      <h3 id="alert">{name}</h3>
    </>
  )
}

export default App
