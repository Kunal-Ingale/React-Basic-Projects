import React, { useState } from 'react'

function Hoc(Original) {
  function NewComponent (){
    const[value, setValue] = useState(10)
     const handleClick = () =>{
        setValue(value * 2);
     }
     return <Original value= {value} handleClick={handleClick} />
  }
  return NewComponent;
}

export default Hoc
