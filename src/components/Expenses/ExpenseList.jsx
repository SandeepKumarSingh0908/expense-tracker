import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './expensesList.css'
import ExpenseFilter from "./ExpenseFilter";
function ExpenseList({expenses}) {
    const [filteredYear,setFilteredYear] = useState('2020');

    const handleFilterYear = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = expenses.filter((expense) => {   
        return expense.date.getFullYear().toString() === filteredYear
    })
    console.log(filteredExpenses);
 
    return <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeYear={handleFilterYear}/>
        {
            filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
        }
    </Card>
}

export default ExpenseList;