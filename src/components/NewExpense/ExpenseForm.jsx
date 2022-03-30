import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const handleFormSubmit = (event) => 
    {   
        event.preventDefault();
        const newExpenseData = {
            title:title,
            amount: +amount,
            date:new Date(date),
        }

        //Reseting form feild values
        props.onSaveExpense(newExpenseData);
        resetForm();
    }

    const resetForm = () =>{
        setTitle('');
        setDate('');
        setAmount('');
    }
    return <form onSubmit={handleFormSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={titleChangeHandler} value={title}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min="0.1" step="0.1" onChange={amountChangeHandler} value={amount}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler} value={date}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.endEditing}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;