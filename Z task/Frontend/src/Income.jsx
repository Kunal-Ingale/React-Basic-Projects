import React, { useState } from "react";
import "./Tracker.css";

function Income({ income, totalExpense, remaining, setIncome }) {
  const [inputIncome, setInputIncome] = useState(income); 

  const handleIncomeSubmit = () => {
    setIncome(parseFloat(inputIncome) || 0); // Update the main income state
    localStorage.setItem("Income", parseFloat(inputIncome) || 0); // Save to localStorage
  };

  return (
    <div className="income_container">
      <div className="input">
        <label htmlFor="Income">Enter your Income:</label>
        <input
          type="number"
          placeholder="Enter your Income"
          value={inputIncome}
          onChange={(e) => setInputIncome(e.target.value)}
        />
        <button onClick={handleIncomeSubmit}>Submit Income</button>
      </div>
      <div className="income">
        <p>Income: Rs.{income.toFixed(2)}</p>
      </div>
      <div>
        <p>Total Expense:  Rs.{totalExpense.toFixed(2)}</p>
      </div>
      <div>
        <p>Remaining:  Rs.{remaining.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Income;
