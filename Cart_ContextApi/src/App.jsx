import './App.css'
import Items from './Components/Items'
import Cart from './Components/Cart'
// import {cartContext} from './Context/CartContext'

function App() {
  

  return (
    <>
      <Items name="Samsung S23 Ultra" price="130k" />
      <Items name="Macbook Air" price="90k" />
      <Items name="Headset" price="15k" />
      <Items name="HP pavilion" price="85k" />
      <Cart/>
      
    </>
  )
}

export default App
