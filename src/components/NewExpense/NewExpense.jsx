import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  }

  const endEditing = () => {
    setIsEditing(false);
  }

  const saveNewExpense = (expense) => {
    const newExpense = {
      id:Math.random().toString(),
      ...expense,
    }
    props.onAddExpense(newExpense);
    endEditing();
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpense={saveNewExpense} endEditing={endEditing}/>}
    </div>
  );
};

export default NewExpense;
