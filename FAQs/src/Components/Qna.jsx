import React from 'react'

function Qna ({q,showAns, handleClick}) {
  return (
    <div className='qna' >{q.question}
    
    <span onClick={ handleClick}>{showAns ? "-" : "+" }</span>
    <hr />
    {showAns && q.answer}
    </div>
  )
}

export default Qna
