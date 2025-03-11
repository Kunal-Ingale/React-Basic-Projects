import React, {  useContext } from 'react'
import { cartContext } from '../Context/CartContext'
const Cart = () => {
    const cart = useContext(cartContext)
    const total = cart.items.reduce((a,b)=>parseInt(a) + parseInt(b.price), 0)
  return (
    <div>
        <h1>Cart</h1>
       {cart && cart.items.map((item)=>(
        <li>{item.name} - Rs.{item.price}</li>
       )
        
       )}
      <h3>Total Value :  Rs.{total}k</h3>
    </div>
  )
}

export default Cart
