import React, { useState } from 'react'
import faqData from '../Data/FaqData.json'
import '../App.css'
import Qna from './Qna';
function Faq() {
    const [Index , SetIndex] = useState(-1);
    const handleClick = ((index)=>{
      SetIndex((prev) =>{
        if(prev === index){
           return -1; 
        }
        return index; 
      });
    })
  return (
    <>
     <h1>FAQs</h1>
      {faqData.faqs.map((q, index)=>{
        return(
        <Qna q ={q} handleClick={() => handleClick(index)} showAns = {index === Index}/>
    ) 
 })}     
     
    </>
  )
}

export default Faq
