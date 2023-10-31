import React, { useState } from 'react';

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Expense Title:', title);
    console.log('Expense Amount:', amount);
    console.log('Date:', date);
    setTitle('');
    setAmount('');
    setDate('');

  };

  return (
    <div>
      <h2>Expense Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Expense Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Expense Amount:</label>
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
