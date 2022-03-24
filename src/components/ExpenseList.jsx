import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import './expensesList.css'
function ExpenseList({expenses}) {
    return <Card className="expenses">
        <ExpenseItem data={expenses[0]} />
        <ExpenseItem data={expenses[1]} />
    </Card>
}

export default ExpenseList;