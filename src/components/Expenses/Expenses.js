import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedDate, setSelectedDate] = useState("2022");

  const selectDateOptionHandler = (selectedDateOption) => {
    setSelectedDate(selectedDateOption);
  };
  const expenseArr = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedDate;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedDate}
          onSelectDateOption={selectDateOptionHandler}
        />
        <ExpensesList items={expenseArr} />
      </Card>
    </div>
  );
};

export default Expenses;
