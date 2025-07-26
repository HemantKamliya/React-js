import React, { useContext } from 'react'
import { counterContexts } from './hooks/counterContext'
const button = () => {
    const counter=useContext(counterContexts)
    return (
    <div>
       {counter}
    </div>
  )
}

export default button