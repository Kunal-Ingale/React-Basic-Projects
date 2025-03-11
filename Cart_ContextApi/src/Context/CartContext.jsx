import React, { useState } from 'react'
import { createContext } from 'react'

// export const cartContext = createContext(null);
 //instead of above line we can Make Custime Hook returning cart Context....
export const useCart = ()=>{
const cart = createContext(null)
 return cart
}

function ContextProvider(props) {
    const [items,setItems] = useState([])
  return (
    <div>
      <cartContext.Provider value={{items,setItems}}>
        {props.children}
      </cartContext.Provider >
    </div>
  )
}

export default ContextProvider
