import React from 'react'


const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-':'+'
  return (
    <div>
      <li className='minus'>
         {transaction.text}
         <span>
           {sign} Rs.{Math.abs(transaction.amount)}
         </span>
          <button className="delete-btn">
             Delete
          </button>
           </li> 
    </div>
  )
}

export default Transaction
