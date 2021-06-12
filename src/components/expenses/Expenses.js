import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
	return (
		<Card className="expenses">
			<ExpenseItem
				date={props.items[0].date}
				title={props.items[0].title}
				amount={props.items[0].amount}
			/>
		</Card>
	);
}

export default Expenses;
