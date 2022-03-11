import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import Classes from "./MealItemForm.module.css";

const MealIteamForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountnumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountnumber < 1 ||
      enteredAmountnumber > 5
    ) {
      setAmountIsValid(false);
      return;
      }
      props.onAddToCart(enteredAmountnumber);
  };
  return (
    <form className={Classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealIteamForm;
