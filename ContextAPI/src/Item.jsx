import React, { useCallback, useContext } from 'react'
import { useCart } from './Context/CartContext'

function Item(props) {
  //  const cart = useContext(CartContext)
  const cart = useCart() 
  console.log(cart);
  
  return (
    <div >
      <h4>Item Name:{props.name}</h4>
      <p>Price : ${props.price}</p>
      <button onClick={()=> cart.setItems([
        ...cart.items,
        {name:props.name , price:props.price}
      ]) }>Add to Cart</button>
    </div>
  )
}

export default Item
