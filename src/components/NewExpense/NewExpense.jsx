import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
 
  const saveNewExpense = (expense) => {
    const newExpense = {
      id:Math.random().toString(),
      ...expense,
    }

    props.onAddExpense(newExpense);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveNewExpense}/>
    </div>
  );
};

export default NewExpense;
