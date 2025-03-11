import React from 'react'
import Hoc from './Hoc'

function Person2({value, handleClick}) {
  return (
    <div>
      <h1>Person2 is offering ${value}</h1>
      <button onClick={handleClick}>Double it</button>
    </div>
  )
}

export default Hoc(Person2)
