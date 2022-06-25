import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isUserInputValid, setIsUserInputValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    // check the valid input and reverse the conditional
    event.target.value.trim().length && setIsUserInputValid(true);
    console.log(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // checking if the user input is invalid
    if (!enteredValue.trim().length) {
      setIsUserInputValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isUserInputValid && "invalid"}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
