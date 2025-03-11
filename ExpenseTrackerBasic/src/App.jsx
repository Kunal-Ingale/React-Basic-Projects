import { useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './App.css';

function App() {

  //States......
  const [expenses, setExpenses] = useState(() => {
  const savedExp = localStorage.getItem('expenses');
    return savedExp ? JSON.parse(savedExp) : [];
  });
  const [editExpense, setEditExpense] = useState(null);
  const [expensesCleared, setExpensesCleared] = useState(false);
  const [salary, setSalary] = useState(() => localStorage.getItem('salary') || '');
  const [remaining, setRemaining] = useState(() => localStorage.getItem('remaining') || '');

  //useEffects.....
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses)); //as localStorage stores data in only String format 
    updateRemaining(salary, expenses);
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('salary', salary);
    updateRemaining(salary, expenses);
  }, [salary]);

  useEffect(() => {
    localStorage.setItem('remaining', remaining);
  }, [remaining]);

  //Functions handled
  const addExpense = (exp) => {
    setExpenses((prev) => [...prev, exp]);
  };

  const updateExpense = (updatedExp) => {
    const updatedExpenses = expenses.map((exp) =>
      exp.id === updatedExp.id ? updatedExp : exp
    );
    setExpenses(updatedExpenses);
    setEditExpense(null);
  };

  const updateRemaining = (salary, expenses) => {
    const totalCost = expenses.reduce((total, exp) => total + parseFloat(exp.cost), 0);
    const remainingAmount = parseFloat(salary) - totalCost;
    setRemaining(remainingAmount.toFixed(2));
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    // console.log(e);
    const name = e.target.name.value; // we can also add these inside input tag with 
    const cost = e.target.cost.value; //(But, we have to add states for each of inputs e.g. name)
    const date = e.target.date.value; // onChange((e)=>setName(e.target.value)) value = {name}
    const id = editExpense ? editExpense.id : Date.now();
    const newExpense = { id, name, cost, date };

    if (editExpense) {
      updateExpense(newExpense);
    } else {
      addExpense(newExpense);
    }
    e.target.reset();
  };

  const clearAll = () => {
    setExpenses([]);
    setExpensesCleared(true);
    setRemaining('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.readOnly = true; //we can write it inside the tag as "readOnly"
      setRemaining(salary);
    }
  };

  let totalSpent = expenses.reduce((total, exp) => total + parseFloat(exp.cost), 0);
  if (isNaN(totalSpent)) {
    totalSpent = 0;
  }

  return (
    <>
      <div className='flex items-center justify-center font-sans'>
        <div className='flex flex-col w-full max-w-md items-center justify-center h-screen border-2 border-black rounded-md'>
          <div className='mb-12'>
            <h1 className='text-3xl font-bold ml-24'>Expense Tracker</h1>
            <div className='flex gap-20 mt-20'>
              <div className='text-l font-bold'>
                Total Salary:
                <input
                  type="number"
                  placeholder='Press Enter'
                  className='w-24 ml-2 border-b border-gray-400 font-medium'
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className='flex text-l font-bold w-40'>
                <span>Remaining:</span>
                <span>
                  <input
                    type="text"
                    className='w-20 border-b border-gray-400'
                    value={remaining}
                    readOnly
                  />
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='m-5 border border-gray-400'>
              <input
                className='pl-2'
                type="text"
                placeholder='Item Name'
                name='name'
                defaultValue={editExpense ? editExpense.name : ''} //to keep the entered values during update
              />                                                 
            </div>
            <div className='m-5 border border-gray-400'>
              <input
                className='pl-2'
                type="number"
                placeholder='Expenditure'
                name='cost'
                defaultValue={editExpense ? editExpense.cost : ''}
              />
            </div>
            <div className='m-5 border border-gray-400'>
              <input
                className='pl-2'
                type="date"
                placeholder='Date'
                name='date'
                defaultValue={editExpense ? editExpense.date : ''}
              />
            </div>
            
            <div className='pl-7'>
              <button
                type='submit'
                className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3'>
                {editExpense ? 'Update' : 'Add'}
              </button>
              
              <button
                type="button"
                onClick={clearAll}
                className='bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                Clear All
              </button>
            
            </div>
          </form>
          
          <div className='mt-5'>Total Spent (Rs.):
            <span className='text-2xl pl-2 font-bold'>{totalSpent}</span>
          </div>
          <div className='w-full max-w-md mt-5'>
            {expenses.length > 0 && !expensesCleared ? (
              expenses.map((exp, index) => (
                <ExpenseItem
                  key={index}
                  name={exp.name}
                  cost={exp.cost}
                  date={exp.date}
                  onEdit={() => setEditExpense(exp)}
                  onDelete={() => setExpenses((prev) =>
                    prev.filter((expense) => expense.id !== exp.id)
                  )}
                />
              ))
            ) : (
              <div className='ml-36 text-gray-400'>No expenses to display</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
