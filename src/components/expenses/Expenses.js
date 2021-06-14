import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
	return (
		<div>
			<Card className="expenses">
				{props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						date={expense.date}
						title={expense.title}
						amount={expense.amount}
					/>
				))}
			</Card>
		</div>
	);
}

export default Expenses;
