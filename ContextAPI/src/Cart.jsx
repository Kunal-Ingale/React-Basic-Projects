import React, { useContext } from 'react'
import { useCart } from './Context/CartContext'

function Cart() {
   const cart = useCart();
    const total = cart.items.reduce((a,b) => a + parseFloat(b.price), 0)
  return (
    <div>
        <h2>Cart Items</h2>
      {
        cart && cart.items.map(item => 
            <li>{item.name} : ${item.price}</li>
        )
      }
      <h3>Total : ${total}</h3>
    </div>
  )
}

export default Cart
