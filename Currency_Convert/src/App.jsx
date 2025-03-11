import React,{useEffect,useState} from 'react'
import Row from './components/Row'

const url ='https://api.exchangeratesapi.io/latest'

function App() {

  const[CurrencyOptions,setCurrencyOptions]=useState([])
  
  useEffect(()=>{
  fetch(url)
  .then(res=> res.json())
  .then(data=>{
    setCurrencyOptions([data.base , Object.keys(data.rates)])
  })
     
  },[])
  
 
  return (
    <>
      <h1>Currency Convertor</h1>
      <Row
      CurrencyOptions={CurrencyOptions}/>
      <div className='equal'>=</div>
      <Row
       CurrencyOptions={CurrencyOptions}/>  
    </>
  )
}

export default App

