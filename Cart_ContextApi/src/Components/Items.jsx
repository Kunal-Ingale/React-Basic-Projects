import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContext';

const Items = (props) => {
    const cart = useContext(cartContext)
  
    
  return (
<>
    <div className="card">
       <h4>{props.name}</h4> 
       <p>Price: {props.price}</p>
       <button 
       onClick={()=>
     cart.setItems([...cart.items, {name:props.name , price: props.price}])
    }
       >Add to cart</button>
    </div> 
</>
  )
}

export default Items
