import React from 'react'
import Item from './Item'
import Cart from './Cart'

function App() {
  return (
    <div className='item'>
      <Item name="Macbook M1" price="2000" />
      <Item name="Iphone 16" price="1200" />
      <Item name="Iwatch" price="600" />
      <Item name="S23 Uktra" price="1600" />
      <Cart/>
    </div>
  )
}

export default App
