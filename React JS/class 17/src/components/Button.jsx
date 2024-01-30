import React from "react";
import { addCounter, minusCounter } from "../store/slices/counterSlice";
import { useDispatch } from "react-redux";

function Button() {
  const dispatch = useDispatch();

  const IncCounter = () => {
    dispatch(addCounter());
  };

  const DecCounter = () => {
    dispatch(minusCounter());
  };
  return (
    <>
      <button onClick={IncCounter}>Inc Button</button>

      <button onClick={DecCounter}>Dec Button</button>
    </>
  );
}

export default Button;
