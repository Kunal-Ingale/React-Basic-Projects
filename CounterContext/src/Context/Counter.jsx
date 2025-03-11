import React, { useState } from 'react'
import { createContext } from 'react'

export const counterContext = createContext(null)


export const CounterProvider = (props) => {
    const [count, setCount] = useState(0)
    return(
    <counterContext.Provider value={{count , setCount}}>
        {props.children}
      </counterContext.Provider>
  )
}

export default CounterProvider 
// To wrap the child components to Give access of VALUES to Child Components

//value: Values or props that we want to pass as GLOBAL Object
//{props.children}: Child components inside the CounterProvider Wrapped/ Come here
//counterContext Actually used to pass as reference to "useContext" Hook so that we can access values (count and setCount in this case)
