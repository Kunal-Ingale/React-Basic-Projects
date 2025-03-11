import React, { useState, useEffect } from "react";
import "./Tracker.css";
import Income from "./Income";

function Tracker() {
  const [income, setIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // For tracking the index of the expense being edited
  const [editingText, setEditingText] = useState("");
  const [editingPrice, setEditingPrice] = useState("");

  // Load initial values from localStorage
  useEffect(() => {
    const savedIncome = parseFloat(localStorage.getItem("Income")) || 0;
    const savedTotalExpense = parseFloat(localStorage.getItem("Expense")) || 0;
    const savedRemaining = parseFloat(localStorage.getItem("Remaining")) || 0;
    const savedExpenses = JSON.parse(localStorage.getItem("Expenses")) || [];
    setIncome(savedIncome);
    setTotalExpense(savedTotalExpense);
    setRemaining(savedRemaining);
    setExpenses(savedExpenses);
  }, []);



  // Submit new expense
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() && price.trim()) {
      const newExpense = parseFloat(price) || 0;

      if (newExpense > remaining) {
        alert("You can't spend more than the remaining amount!");
        return;
      }

      // Update expenses list
      const updatedExpenses = [...expenses, { text, price: newExpense }];
      setExpenses(updatedExpenses);

      // Update total expense and remaining
      const updatedTotalExpense = totalExpense + newExpense;
      const updatedRemaining = income - updatedTotalExpense;
      setTotalExpense(updatedTotalExpense);
      setRemaining(updatedRemaining);

      // Save data to localStorage
      localStorage.setItem("Income", income);
      localStorage.setItem("Expense", updatedTotalExpense);
      localStorage.setItem("Remaining", updatedRemaining);
      localStorage.setItem("Expenses", JSON.stringify(updatedExpenses));

      // Reset input fields
      setText("");
      setPrice("");
    } else {
      alert("Please enter both category and price.");
    }
  };

  // Delete an expense
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((i) => i !== index);
    setExpenses(updatedExpenses);

    // Update total expense and remaining
    const updatedTotalExpense = updatedExpenses.reduce((acc, expense) => acc + expense.price, 0);
    const updatedRemaining = income - updatedTotalExpense;
    setTotalExpense(updatedTotalExpense);
    setRemaining(updatedRemaining);

    // Save data to localStorage
    localStorage.setItem("Expense", updatedTotalExpense);
    localStorage.setItem("Remaining", updatedRemaining);
    localStorage.setItem("Expenses", JSON.stringify(updatedExpenses));
  };

  // Start editing an expense
  const handleEdit = (index) => {
    const expenseToEdit = expenses[index];
    setEditingIndex(index);
    setEditingText(expenseToEdit.text);
    setEditingPrice(expenseToEdit.price);
  };

  // Submit edited expense
  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (editingText.trim() && editingPrice.trim()) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editingIndex] = { text: editingText, price: parseFloat(editingPrice) };

      

      // Update total expense and remaining
      const updatedTotalExpense = updatedExpenses.reduce((acc, expense) => acc + expense.price, 0);
      const updatedRemaining = income - updatedTotalExpense;
      setTotalExpense(updatedTotalExpense);
      setRemaining(updatedRemaining);

      setExpenses(updatedExpenses);
      setEditingIndex(null); // Reset editing index

      // Save data to localStorage
      localStorage.setItem("Expense", updatedTotalExpense);
      localStorage.setItem("Remaining", updatedRemaining);
      localStorage.setItem("Expenses", JSON.stringify(updatedExpenses));

      // Clear the editing fields
      setEditingText("");
      setEditingPrice("");
    } else {
      alert("Please enter both category and price.");
    }
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="content">
        <Income
          income={income}
          totalExpense={totalExpense}
          remaining={remaining}
          setIncome={setIncome} // Pass setIncome function as prop
        />
        <div className="input">
          <input
            type="text"
            placeholder="Enter the Category"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter the Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        
        {/* Edit Expense Form */}
        {editingIndex !== null && (
          <div className="input">
            <h3>Edit Expense</h3>
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
            />
            <input
              type="number"
              value={editingPrice}
              onChange={(e) => setEditingPrice(e.target.value)}
            />
            <button onClick={handleEditSubmit}>Submit Edit</button>
          </div>
        )}

        <div className="Expenses">
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                {expense.text}: ${expense.price.toFixed(2)}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
