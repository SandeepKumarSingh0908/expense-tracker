import "./expenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card';
function ExpenseItem(props) {
    console.log(props.data.date);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date}/>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">${props.data.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
