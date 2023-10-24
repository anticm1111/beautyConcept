import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const InputForm = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  font-size: 1.4rem;

  .input {
    display: flex;
    gap: 1rem;

    #amount {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttons {
    color: pink;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    div {
      border-radius: 5px;
      padding: 1rem;
      border: 1px solid #fff;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-2px);
        color: #fff;
        background-color: pink;
      }
    }
    div[disabled] {
      pointer-events: none;
      opacity: 0.7;
    }
  }
`;

const ProductForm = (props) => {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const { amount } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    // console.log("Entered amonut", enteredAmountNumber);
    props.onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = "1";
  };

  return (
    <InputForm>
      <div className="input">
        <label htmlFor="Amount">Amount</label>
        <input
          type="number"
          id="amount"
          // min="1"
          // max="5"
          step="1"
          defaultValue="1"
          ref={amountInputRef}
        />
      </div>
      <div className="buttons">
        <div onClick={submitHandler}>+ Add</div>
        <div>{props.amount}</div>
        <div onClick={props.removeItem} disabled={amount < 1}>
          - Remove
        </div>
      </div>
      {!amountIsValid && <p>Please enter a valid amount 1-5</p>}
    </InputForm>
  );
};

export default ProductForm;
