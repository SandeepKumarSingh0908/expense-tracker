import "./App.css";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseList from "./components/Expenses/ExpenseList";
import ExpensesData from "./components/Data/Expenses";
function App() {

  const [expenses,setExpenses] = useState(ExpensesData);
  
  const addExpense = (expense) => {
     setExpenses([...expenses,expense]);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense}/>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
