import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username="Hemant" channel={45}/>

    <Card username="Harshit Nagar"/>
    </>
  )
}

export default App
