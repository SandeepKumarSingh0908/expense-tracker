import { useState } from "react";
import Card from '../UI/Card';
import './expensesList.css'
import ExpenseFilter from "./ExpenseFilter";
import ExpensesContent from "./ExpensesContent";
import ExpensesChart from "./ExpensesChart";
function ExpenseList({expenses}) {
    const [filteredYear,setFilteredYear] = useState('2020');

    const handleFilterYear = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = expenses.filter((expense) => {   
        return expense.date.getFullYear().toString() === filteredYear
    })
 
    return <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseFilter selected={filteredYear} onChangeYear={handleFilterYear}/>
        <ExpensesContent item={filteredExpenses} />
    </Card>
}

export default ExpenseList;