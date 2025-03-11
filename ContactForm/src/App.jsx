import { useState } from 'react'
import Navi from './Components/nav'
import Text from './Components/text/text'
import ContactForm from './Components/contactForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi/>
      <Text/>
      <ContactForm/>
    </>
  )
}

export default App
