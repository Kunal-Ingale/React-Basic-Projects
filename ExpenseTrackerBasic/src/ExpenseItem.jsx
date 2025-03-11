import React from 'react';

function ExpenseItem({name, cost, date, onEdit, onDelete}) {

  return (
    <div className='flex justify-between border-b border-gray-300 p-1'>
      <div>{name}</div>
      <div>Rs.{cost}</div>
      <div>{date}</div>
      <button onClick={onEdit}>
        <img className='w-6 mr-0'
       src="https://img.icons8.com/?size=100&id=71201&format=png&color=000000"  />
       </button>
      
      <button onClick={onDelete} >
       <img  className='w-6 m-0' src="https://img.icons8.com/?size=100&id=78581&format=png&color=000000" alt="Remove" />
      </button>
    </div>
  );
}

export default ExpenseItem;
