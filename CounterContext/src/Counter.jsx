import React from 'react'
import { useContext } from 'react'
import {  counterContext } from './Context/Counter'

function Counter() {
    const cont = useContext(counterContext)
  return (
    <div>
      
      <button onClick={()=> cont.setCount(cont.count + 1)}> Increment </button>
      <button onClick={()=> cont.setCount(cont.count - 1)}>Decrement </button>
    </div>
  )
}

export default Counter
