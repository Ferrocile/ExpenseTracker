import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({  -- for handling the above states in one object
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({  -- Could have state snapshot issues; not ideal
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {  -- Better approach if you depend on previous state
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ -- Could have state snapshot issues; not ideal
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => { -- Better approach if you depend on previous state
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({  -- Could have state snapshot issues; not ideal
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => { -- Better approach if you depend on previous state
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    showOrHide(event);
  };

  const showOrHide = (event) => {
    //show form, hide this button
    event.preventDefault();
      const displayForm = document.getElementById("formElements");
      const newExpenseBtn = document.getElementById("showHideBtn");
    if( displayForm.style.display === "none")
      {
        displayForm.style.display = "block";
        newExpenseBtn.style.display = "none";
      }
    else
    {
      displayForm.style.display = "none";
      newExpenseBtn.style.display = "block";
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div style={{display: "none"}} id="formElements">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2010-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div id="formButtons" className="new-expense__actions">
          <button type="reset" onClick={showOrHide}>Cancel</button>
          <button type="submit" onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </div>
      <div id="showHideBtn" className="new-expense__create-btn">
        <button type="submit" onClick={showOrHide}>
          Add New Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
