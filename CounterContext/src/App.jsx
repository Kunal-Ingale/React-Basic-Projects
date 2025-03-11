import './App.css'
import Counter from './Counter'
import { useContext } from 'react'
import { counterContext } from './Context/Counter'
function App() {
  const counterState = useContext(counterContext)
  // console.log(counterState); //count and setCount

  return (
    <>
    <h1>Count is {counterState.count} </h1>
      <Counter/>
      <Counter/>
      <Counter/>

    </>
  )
}

export default App
